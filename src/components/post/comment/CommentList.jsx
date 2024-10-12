import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
  const { get, post, del, token } = useAPI();
  const [comments, setComments] = useState([]); //////
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
      <ul>
        {data?.pages.flatMap((page) => page.comments).length > 0 ? (
          data.pages
            .flatMap((page) => page.comments)
            .map((comment) => (
              <li key={comment.id}>
                <div>
                  <img
                    src={
                      comment.author.image ===
                      "http://146.56.183.55:5050/Ellipse.png"
                        ? defaultProfileIcon
                        : comment.author.image
                    }
                    alt={`${comment.author.username}의 프로필사진`}
                  />
                  <span>{comment.author.username}</span>
                  <time>{timeAgo(comment.createdAt)}</time>
                  <button onClick={() => handleOpenOptionsModal(comment.id)}>
                    삭제
                  </button>
                </div>
                <p>{comment.content}</p>
              </li>
            ))
        ) : (
          <li>댓글이 없습니다.</li>
        )}
      </ul>
      <div
        style={{
          position: "fixed",
          bottom: "50px",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "100%",
          maxWidth: "480px",
          background: "aliceblue",
          zIndex: 100,
        }}
      >
        <input
          type="text"
          value={newComment}
          onInput={(e) => setNewComment(e.target.value)}
          placeholder="댓글 입력하기"
        />
        <button onClick={handleAddComment}>게시</button>
      </div>
      {isCommentModalOpen && (
        <OptionsModal actionHandlers={actionHandlersOptions} />
      )}
    </>
  );
}
