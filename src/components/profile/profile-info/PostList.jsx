import React, { useState } from "react";
import PostItem from "../../feed/PostItem";
import OptionsModal from "../../ui/modal/OptionsModal";
import ConfirmModal from "../../ui/modal/ConfirmModal";

const PostList = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

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
            commentCount={post.comments.length}
          />
        ))}
    </div>
  );
};

export default PostList;
