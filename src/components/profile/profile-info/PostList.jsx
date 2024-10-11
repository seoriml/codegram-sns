import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../../feed/PostItem";
import OptionsModal from "../../ui/modal/OptionsModal";
import ConfirmModal from "../../ui/modal/ConfirmModal";
import { setCommentCount } from "../../../redux/commentSlice";

const PostList = ({ posts }) => {
  const dispatch = useDispatch();

  const [selectedPost, setSelectedPost] = useState(null);
  // 댓글 수를 Redux에서 져오기
  const commentCounts = useSelector((state) => state.comments);
  // 댓글 수 업데이트
  useEffect(() => {
    posts.forEach((post) => {
      if (commentCounts[post.id] !== post.comments.length) {
        dispatch(
          setCommentCount({ postId: post.id, count: post.comments.length })
        );
      }
    });
  }, [dispatch, posts, commentCounts]);

  return (
    <div
      style={{
        backgroundColor: posts.length === 0 ? "#efefef" : "transparent",
        // minHeight: "100vh",
        // width: "100%",
      }}
    >
      {posts.length > 0 &&
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            selectedPost={selectedPost}
            setSelectedPost={() => setSelectedPost(post.id)}
            OptionsModalComponent={OptionsModal}
            ConfirmModalComponent={ConfirmModal}
            commentCount={commentCounts[post.id]}
          />
        ))}
    </div>
  );
};

export default PostList;
