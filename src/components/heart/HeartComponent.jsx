import React, { useState } from 'react';
import emptyHeart from "../../assets/images/icon_heart.svg";
import fillHeart from "../../assets/images/icon_heart_fill.svg";
import useAPI from '../../hooks/useAPI';


function HeartComponent({ hearts, postId, hearted }) {
  const [heartCount, setHeartCount] = useState(hearts);
  const { post } = useAPI();
  const token = localStorage.getItem('userToken');

  const handleHeart = async () => {
    console.log({ token });

    // if (body) {
    //   response.body = JSON.stringify(body);
    // }
    // console.log(response);
    // const result = await response.json();
    // console.log(result);

    // :post_id → 게시글 번호
    try {
      const response = await post (
        `${import.meta.env.VITE_API_URL}/post/${postId}/heart`,
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
    const response = await fetch();
    console.log(response);
    // try {
    //   setHeart(false);
    //   setUnHeart(true);
    //   setHeartCount(prev => Math.max(prev - 1, 0));
    //   console.log(heart, unHeart, '좋아요 취소');
    // }
    // catch (error) {
    //   alert("좋아요 취소 중 에러가 발생했습니다.");
    //   console.error("좋아요 취소 API 요청 중 에러 발생:", error);
    // }
  }

  /*
    <HeartComponent post={post.id} />
    비어있는 좋아요 버튼을 누르면 채워진 좋아요 버튼으로 바뀌고 좋아요 상태가 된다
    채워진 좋아요 버튼을 누르면 비어있는 좋아요 버튼으로 바뀌고 좋아요 취소 상태가 된다
  */
  return (
    <>
      {hearted ? (
        <button onClick={handleUnHeart}>
          <img src={fillHeart} alt="이미 좋아요를 한 게시글입니다" />
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