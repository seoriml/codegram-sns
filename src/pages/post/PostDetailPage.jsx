// pages/PostDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import PostDetailComponent from "../../components/post/PostDetail";
import Loading from "../../components/ui/Loading";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { data, loading, error, get, token } = useAPI();

  // 게시물 상세 정보 가져오기 함수.
  const getPostDetail = async () => {
    {
      const response = await get(
        `${import.meta.env.VITE_API_URL}/post/${id}`,
        "application/json",
        token
      );
      setPost(response.payload.post);
    }
  };

  useEffect(() => {
    getPostDetail();
  }, [id]);

  if (!post) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <PostDetailComponent post={post} />
    </>
  );
}
