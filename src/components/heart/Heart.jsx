import React, { useState } from 'react';
import emptyHeart from "../../assets/images/icon_heart.svg";
import fillHeart from "../../assets/images/icon_heart_fill.svg";

export default function HeartComponent() {
  const [heart, setHeart] = useState(false);
  const [unHeart, setUnHeart] = useState(true);
  const [heartCount, setHeartCount] = useState(0);

  const handleHeart = () => {
    setHeart(true);
    setUnHeart(false);
    setHeartCount(prev => prev + 1);
  }

  const handleUnHeart = () => {
    setHeart(false);
    setUnHeart(true);
    setHeartCount(prev => Math.max(prev - 1, 0));
  }

  return (
    <>
      {unHeart ? (
        <button onClick={handleHeart}>
          <img src={emptyHeart} alt="좋아요를 안 한 게시글입니다." />
          <span>{heartCount}</span>
        </button>
      ) : (
        <button onClick={handleUnHeart}>
          <img src={fillHeart} alt="좋아요를 한 게시글입니다" />
          <span>{heartCount}</span>
        </button>
      )}
    </>
  )
}