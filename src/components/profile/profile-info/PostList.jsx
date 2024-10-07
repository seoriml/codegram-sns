import React from "react";
import PostItem from "../../feed/PostItem";
import EmptyFeed from "../../feed/EmptyFeed";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <EmptyFeed />
      )}
    </div>
  );
};

export default PostList;
