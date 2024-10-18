import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteQuery } from "@tanstack/react-query";
import useAPI from "../../../hooks/useAPI";
import {
  setCommentCount,
  incrementCommentCount,
  decrementCommentCount,
} from "../../../redux/commentSlice";
import { openOptionsModal } from "../../../redux/optionsModalSlice";
import OptionsModal from "../../ui/modal/OptionsModal";
import defaultProfileIcon from "../../../assets/images/user_profile.svg";
import styles from "./CommentList.module.scss";
import moreIcon from "../../../assets/images/icon_more_vertical_mini.svg";
import Loading from "../../../components/ui/Loading";

const LIMIT = 10; // 한 번에 불러올 댓글 수

// 댓글등록 시간 계산 함수
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) return `${interval}년 전`;
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval}개월 전`;
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval}일 전`;
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval}시간 전`;
  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval}분 전`;
  return `${seconds}초 전`;
};

export default function CommentList({ postId }) {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.api.profileData);

  useEffect(() => {
    if (profileData) {
      sessionStorage.setItem("sessionProfileData", JSON.stringify(profileData));
    }
  }, [profileData]);

  const sessionProfileData = JSON.parse(
    sessionStorage.getItem("sessionProfileData")
  );

  const { get, post, del, token, loading } = useAPI();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  // 댓글 목록 불러오기
  const getCommentsList = async ({ pageParam = 0 }) => {
    const response = await get(
      `${
        import.meta.env.VITE_API_URL
      }/post/${postId}/comments/?limit=${LIMIT}&skip=${pageParam}`,
      "application/json",
      token
    );

    if (response && response.payload.comments) {
      return {
        comments: response.payload.comments,
        nextSkip: pageParam + LIMIT,
      };
    } else {
      throw new Error("댓글 목록 불러오기 실패");
    }
  };

  // useInfiniteQuery를 사용하여 댓글 목록 불러오기
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["comments", postId],
      queryFn: getCommentsList,
      getNextPageParam: (lastPage) => {
        return lastPage.comments.length < LIMIT ? undefined : lastPage.nextSkip;
      },
    });

  // 스크롤 이벤트로 무한 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 댓글 등록
  const handleAddComment = async () => {
    if (!newComment) {
      alert("댓글을 입력해주세요.");
      return;
    }

    const response = await post(
      `${import.meta.env.VITE_API_URL}/post/${postId}/comments`,
      {
        comment: {
          content: newComment,
        },
      },
      "application/json",
      token
    );

    if (response && response.payload.comment) {
      dispatch(incrementCommentCount(postId)); // Redux에서 댓글 수 증가
      alert("댓글이 추가되었습니다.");
      setNewComment("");
      refetch();
    } else {
      alert("댓글 추가에 실패했습니다.");
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId) => {
    const response = await del(
      `${import.meta.env.VITE_API_URL}/post/${postId}/comments/${commentId}`,
      "application/json",
      token
    );

    if (response && response.payload.status === "200") {
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      setComments(updatedComments);
      dispatch(decrementCommentCount(postId));
      refetch();
      alert("댓글이 삭제되었습니다.");
    } else {
      alert("댓글 삭제에 실패했습니다.");
    }
  };

  // 댓글 수 업데이트
  useEffect(() => {
    dispatch(setCommentCount({ postId, count: comments.length }));
  }, [dispatch, postId, comments.length]);

  // 삭제 옵션 모달 열기
  const handleOpenOptionsModal = (commentId) => {
    setSelectedCommentId(commentId);
    setIsCommentModalOpen(true);
    const options = [{ text: "삭제", actionId: "optionDelete" }];
    dispatch(openOptionsModal({ options }));
  };

  const actionHandlersOptions = {
    optionDelete: () => {
      handleDeleteComment(selectedCommentId);
    },
  };

  return (
    <>
      <ul className={styles.commentsWrapper}>
        {loading && (
          <div>
            <Loading />
          </div>
        )}
        {data?.pages.flatMap((page) => page.comments).length > 0 ? (
          data.pages
            .flatMap((page) => page.comments)
            .map((comment) => {
              const isMyComment =
                sessionProfileData?.user?.username ===
                  comment.author.username ||
                sessionProfileData?.user?.accountname ===
                  comment.author.accountname;

              return (
                <li key={comment.id} className={styles.commentItem}>
                  <img
                    className={styles.profileImg}
                    src={
                      comment.author.image ===
                      "http://146.56.183.55:5050/Ellipse.png"
                        ? defaultProfileIcon
                        : comment.author.image
                    }
                    alt={`${comment.author.username}의 프로필사진`}
                  />
                  <div className={styles.content}>
                    <div className={styles.commentHeader}>
                      <div className={styles.commentAuthor}>
                        <span>{comment.author.username}</span>
                        <time>{timeAgo(comment.createdAt)}</time>
                      </div>
                      {isMyComment && (
                        <button
                          onClick={() => handleOpenOptionsModal(comment.id)}
                        >
                          <img src={moreIcon} alt="더보기" />
                        </button>
                      )}
                    </div>

                    <p className={styles.emptyComment}>{comment.content}</p>
                  </div>
                </li>
              );
            })
        ) : (
          <li className={styles.emptyComment}>
            <p>아직 댓글이 없습니다.</p>
          </li>
        )}
      </ul>
      <div className={styles.inputCommentWrapper}>
        <img
          className={styles.profileImg}
          src={
            sessionProfileData?.user?.image ===
              "http://146.56.183.55:5050/Ellipse.png" ||
            sessionProfileData?.user?.image ===
              "https://estapi.mandarin.weniv.co.kr/undefined"
              ? defaultProfileIcon
              : sessionProfileData?.user?.image
          }
        />
        <input
          className={styles.inputComment}
          type="text"
          value={newComment}
          onInput={(e) => setNewComment(e.target.value)}
          placeholder="댓글 입력하기..."
        />
        <button
          onClick={handleAddComment}
          style={{
            color: newComment
              ? "var(--color-element-blue)"
              : "var(--color-element-gray)", // 입력값에 따라 배경색 변경
          }}
        >
          게시
        </button>
      </div>
      {isCommentModalOpen && (
        <OptionsModal actionHandlers={actionHandlersOptions} />
      )}
    </>
  );
}
