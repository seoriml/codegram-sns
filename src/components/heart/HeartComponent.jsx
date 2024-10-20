// src/components/heart/HeartComponent.jsx
import React, { useState, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import emptyHeart from "../../assets/images/icon_heart.svg";
import fillHeart from "../../assets/images/icon_heart_fill.svg";

// hearts: 초기 좋아요 수,
// hearted: 사용자의 초기 좋아요 상태,
// isProcessing: 요청 처리 중인지 확인하는 상태
function HeartComponent({ hearts, postId, hearted }) {
  const [heartCount, setHeartCount] = useState(hearts);
  const [localHearted, setLocalHearted] = useState(hearted);
  const [isProcessing, setIsProcessing] = useState(false);
  const { post, del } = useAPI();
  const token = localStorage.getItem("userToken");

  // 컴포넌트가 마운트되거나 hearts나 hearted prop이 변경될 때마다 실행
  useEffect(() => {
    setHeartCount(hearts);
    setLocalHearted(hearted);
  }, [hearts, hearted]);

  // 좋아요
  const handleHeart = async () => {
    if (isProcessing) return; // 이미 요청이 진행 중이면 중복 방지
    setIsProcessing(true);    // 요청 시작
    const response = await post(
      `${import.meta.env.VITE_API_URL}/post/${postId}/heart`,
      "",
      "application/json",
      token
    );
    try {
      setHeartCount((prevHeartCount) => prevHeartCount + 1);
      setLocalHearted(true);
      console.log("좋아요 성공", token, response);
    } catch (error) {
      console.error("좋아요 API 요청 중 에러 발생:", error);
    } finally {
      setIsProcessing(false); // 요청 끝
    }
  };

  // 좋아요 취소
  const handleUnHeart = async () => {
    if (isProcessing) return; // 이미 요청이 진행 중이면 중복 방지
    setIsProcessing(true);    // 요청 시작
    const response = await del(
      `${import.meta.env.VITE_API_URL}/post/${postId}/unheart`,
      "application/json",
      token
    );
    try {
      setHeartCount((prevHeartCount) => prevHeartCount - 1);
      setLocalHearted(false);
      console.log("좋아요 취소 성공", token, response);
    } catch (error) {
      console.error("좋아요 취소 API 요청 중 에러 발생:", error);
    } finally {
      setIsProcessing(false); // 요청 끝
    }
  };

  return (
    <>
      {localHearted ? (
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
  );
}

export default HeartComponent;