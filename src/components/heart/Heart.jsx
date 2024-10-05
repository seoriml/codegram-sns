import React, { useState } from 'react'
import emptyHeart from "../../assets/images/icon_heart.svg";
import fillHeart from "../../assets/images/icon_heart_fill.svg";
import Button from "../ui/Button"

export default function HeartComponent() {
  const [like, setLike] = useState("");
  function clickLike() {
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }

  return (
    <>
      <img src={emptyHeart} alt="좋아요를 안한 게시글" />
      <img src={fillHeart} alt="좋아요를 한 게시글" width="20px" height="20px" />
      <Button buttonType='buttonFollower' onClick={clickLike}>{like}</Button>
    </>
  )
}