// components/PostDetailComponent.jsx
import React from "react";
import PostItem from "../feed/PostItem";
import styles from "../feed/PostFeed.module.scss";
import BackButton from "../ui/button/BackButton";

export default function PostDetailComponent({ post }) {
  return (
    <>
      <div className={styles.header}>
        <BackButton />
      </div>
      <div className={styles.postsWrapper}>
        <PostItem post={post} />
      </div>
    </>
  );
}
