// components/PostDetailComponent.jsx
import React from 'react';
import PostItem from '../feed/PostItem';

export default function PostDetailComponent({ post }) {

  return (
    <div>
       <PostItem post={post}/>
    </div>
  );
}
