import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeart } from "../../redux/apiSlice";

const like = React.memo(() => {
  console.log(isLiked, likes, id);
  const dispatch = useDispatch();
  // 전역 데이터를 받아와서 쓴다. ex 좋아요 유무, 좋아요 수
  const { feedData } = useSelector((state) => state.api);
  const hearted = feedData.post.hearted;
  const heartCount = feedData.post.heartCount;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");
    const res = await post(`${import.meta.env.VITE_API_URL}/post/${id}/heart`, token);
    dispatch(setHeart(res.payload.post));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <button type="submit">{isLiked ? "true" : "false"}</button>
      </form>
      <div>{likes}</div>
    </div>
  );
});

export default like;
