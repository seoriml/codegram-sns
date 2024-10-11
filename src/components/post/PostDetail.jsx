// components/PostDetailComponent.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../feed/PostItem";
import styles from "../feed/PostFeed.module.scss";
import BackButton from "../ui/button/BackButton";
import CommentList from "./comment/CommentList";
import {
  setCommentCount,
  incrementCommentCount,
  decrementCommentCount,
} from "../../redux/commentSlice";

export default function PostDetailComponent({ post }) {
  const dispatch = useDispatch();
  const commentCount =
    useSelector((state) => state.comments[post.id]) || post.comments.length; // 전역 상태에서 댓글 수 가져오기
  const [comments, setComments] = useState(post.comments); // 댓글 내용은 로컬 상태로 관리

  useEffect(() => {
    // 댓글 수를 업데이트
    dispatch(setCommentCount({ postId: post.id, count: comments.length }));
  }, [comments.length, dispatch, post.id]);

  const handleAddComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]); // 댓글 추가
    dispatch(incrementCommentCount(post.id)); // 댓글 수 증가
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    ); // 댓글 삭제
    dispatch(decrementCommentCount(post.id)); // 댓글 수 감소
  };

  return (
    <>
      <div className={styles.header}>
        <BackButton />
      </div>
      <div className={styles.postsWrapper}>
        <PostItem post={post} commentCount={commentCount} />
        <CommentList
          postId={post.id}
          onAddComment={handleAddComment}
          onDeleteComment={handleDeleteComment}
        />
      </div>
    </>
  );
}
