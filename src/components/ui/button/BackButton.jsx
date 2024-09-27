import React from "react";
import arrowIcon from "../../../assets/images/icon_arrow_left.svg";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button type="button" onClick={handleBack}>
      <img src={arrowIcon} alt="이미지업로드버튼" />
    </button>
  );
};

export default BackButton;
