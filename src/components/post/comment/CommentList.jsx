import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useAPI from "../../../hooks/useAPI";
import {
  setCommentCount,
  incrementCommentCount,
  decrementCommentCount,
} from "../../../redux/commentSlice";
import { openOptionsModal } from "../../../redux/optionsModalSlice";
import OptionsModal from "../../ui/modal/OptionsModal";

export default function CommentList({ postId }) {
  const dispatch = useDispatch();
  const { get, post, del, token } = useAPI();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  // 댓글 목록 불러오기
  useEffect(() => {
    const getCommentsList = async () => {
      const response = await get(
        `${import.meta.env.VITE_API_URL}/post/${postId}/comments`,
        "application/json",
        token
      );

      if (response && response.payload.comments) {
        setComments(response.payload.comments);
      } else {
        console.error("댓글 목록 불러오기 실패:", response);
        alert("댓글 목록 불러오기에 실패했습니다.");
      }
    };

    getCommentsList();
  }, [postId]);

  // 댓글 작성
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
      setComments((prevComments) => [
        response.payload.comment,
        ...prevComments,
      ]);
      alert("댓글이 추가되었습니다.");
      setNewComment("");
      dispatch(incrementCommentCount(postId));
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
      console.log("response.status", response.status);
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      setComments(updatedComments);
      dispatch(decrementCommentCount(postId));
      alert("댓글이 삭제되었습니다.");
    } else {
      alert(response.message || "댓글 삭제에 실패했습니다.");
    }
  };

  // 댓글 수 업데이트
  useEffect(() => {
    dispatch(setCommentCount({ postId, count: comments.length }));
  }, [dispatch, postId]);

  // 삭제 옵션 모달 열기
  const handleOpenOptionsModal = (commentId) => {
    setSelectedCommentId(commentId);
    const options = [{ text: "삭제", actionId: "optionDelete" }];
    dispatch(openOptionsModal({ options }));
  };

  const actionHandlersOptions = {
    optionDelete: () => {
      handleDeleteComment(selectedCommentId);
    },
  };

  return (
    <div>
      <h3>댓글목록</h3>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.content}</p>
              <button onClick={() => handleOpenOptionsModal(comment.id)}>
                삭제
              </button>
            </li>
          ))
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글 입력하기"
        />
        <button onClick={handleAddComment}>게시</button>
      </div>
      <OptionsModal actionHandlers={actionHandlersOptions} />
    </div>
  );
}
