import React from "react";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button type="button" onClick={handleBack}>
      뒤로가기
    </button>
  );
};

export default BackButton;
