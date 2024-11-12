import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../../feed/PostItem";
import OptionsModal from "../../ui/modal/OptionsModal";
import ConfirmModal from "../../ui/modal/ConfirmModal";
import { setCommentCount } from "../../../redux/commentSlice";
import styles from "../../feed/PostFeed.module.scss";

const PostList = ({ posts }) => {
  const dispatch = useDispatch();

  const [selectedPost, setSelectedPost] = useState(null);
  // 댓글 수를 Redux에서 가져오기
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
    <section
      style={{
        backgroundColor: posts.length === 0 ? "#F2F2F2" : "#ffffff",
        width: "100%",
        minHeight: "50vh",
        marginBottom: "-40px",
      }}
    >
      <ul className={styles.postsWrapper}>
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id}>
              <PostItem
                post={post}
                selectedPost={selectedPost}
                setSelectedPost={() => setSelectedPost(post.id)}
                OptionsModalComponent={OptionsModal}
                ConfirmModalComponent={ConfirmModal}
                commentCount={commentCounts[post.id]}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default PostList;
