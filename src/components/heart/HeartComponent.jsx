import React, { useState } from 'react';
import emptyHeart from "../../assets/images/icon_heart.svg";
import fillHeart from "../../assets/images/icon_heart_fill.svg";
import useAPI from '../../hooks/useAPI';


function HeartComponent({ hearts, postId, hearted }) {
  const [heartCount, setHeartCount] = useState(hearts);
  const { post, del } = useAPI();
  const token = localStorage.getItem('userToken');

  const handleHeart = async () => {
    console.log({ token });
    try {
      const response = await post (
        `${import.meta.env.VITE_API_URL}/post/${postId}/heart`, // postId → 게시글 번호
        "",
        "application/json",
        token
      );
      console.log(response);
    }
    catch (error) {
      alert("좋아요 API 요청 중 에러 발생");
      console.error("좋아요 API 요청 중 에러 발생:", error);
    }
  }

  const handleUnHeart = async () => {
    console.log({ token });
    try {
      const response = await del (
        `${import.meta.env.VITE_API_URL}/post/${postId}/unheart`, // postId → 게시글 번호
        "application/json",
        token
      );
      console.log(response);
    }
    catch (error) {
      alert("좋아요 취소 API 요청 중 에러 발생");
      console.error("좋아요 취소 API 요청 중 에러 발생:", error);
    }
  }

  return (
    <>
      {hearted ? (
        <button onClick={handleUnHeart}>
          <img src={fillHeart} alt="이미 좋아요를 한 게시글입니다." />
          <span>{heartCount}</span>
        </button>
      ) : (
        <button onClick={handleHeart}>
          <img src={emptyHeart} alt="아직 좋아요를 안 한 게시글입니다." />
          <span>{heartCount}</span>
        </button>
      )}
    </>
  )
}
export default HeartComponent;