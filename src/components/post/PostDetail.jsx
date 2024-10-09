// components/PostDetailComponent.jsx
import React from "react";
import PostItem from "../feed/PostItem";
import styles from "../feed/PostFeed.module.scss";

export default function PostDetailComponent({ post }) {
  return (
    <div className={styles.postsWrapper}>
      <PostItem post={post} />
    </div>
  );
}
