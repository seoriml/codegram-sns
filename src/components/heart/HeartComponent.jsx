// src/components/heart/HeartComponent.jsx
import React, { useState, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import emptyHeart from "../../assets/images/icon_heart.svg";
import fillHeart from "../../assets/images/icon_heart_fill.svg";

// hearts: 초기 좋아요 수, hearted: 사용자의 초기 좋아요
function HeartComponent({ hearts, postId, hearted }) {
  const [heartCount, setHeartCount] = useState(hearts); // 좋아요 수
  const [localHearted, setLocalHearted] = useState(hearted); // 사용자의 좋아요 여부
  const [isProcessing, setIsProcessing] = useState(false); // API 요청 중
  const { post, del } = useAPI();
  const token = localStorage.getItem("userToken");

  // 컴포넌트가 마운트되거나 hearts나 hearted prop이 변경될 때마다 상태를 업데이트
  useEffect(() => {
    setHeartCount(hearts);
    setLocalHearted(hearted);
  }, [hearts, hearted]);

  // 좋아요/좋아요 취소 토글 함수
  const handleToggleHeart = async () => {
    if (isProcessing) return; // 이미 요청이 진행 중이라면 중복 요청 방지
    setIsProcessing(true); // 요청 시작 시 처리 중 상태로 전환
    try {
      if (localHearted) {
        // 이미 좋아요를 누른 상태면 좋아요 취소 요청
        const response = await del(`${import.meta.env.VITE_API_URL}/post/${postId}/unheart`, "application/json", token);
        // 좋아요 취소 성공 시 좋아요 수 1을 감소시키고, 좋아요 상태를 취소로 전환
        setHeartCount((prevHeartCount) => prevHeartCount - 1);
        setLocalHearted(false);
        // console.log("좋아요 취소 성공", token, response);
      } else {
        // 좋아요가 눌리지 않은 상태면 좋아요 요청
        const response = await post(
          `${import.meta.env.VITE_API_URL}/post/${postId}/heart`,
          "",
          "application/json",
          token
        );
        // 좋아요 취소 성공 시 좋아요 수 1을 증가시키고, 좋아요 상태를 활성화
        setHeartCount((prevHeartCount) => prevHeartCount + 1);
        setLocalHearted(true);
        // console.log("좋아요 성공", token, response);
      }
    } catch (error) {
      console.error("API 요청 중 에러 발생:", error);
      throw new Error("서버 응답이 올바르지 않습니다.");
    } finally {
      // 요청 완료 시 처리 중 상태 해제
      setIsProcessing(false);
    }
  };

  return (
    <button onClick={handleToggleHeart} disabled={isProcessing}>
      <img src={localHearted ? fillHeart : emptyHeart} alt={localHearted ? "좋아요 취소" : "좋아요"} />
      <span>{heartCount}</span>
    </button>
  );
}

export default HeartComponent;
