import React from "react";
import arrowIcon from "../../../assets/images/icon_arrow_left.svg";
import styles from "../../../components/ui/Button.module.scss";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button type="button" onClick={handleBack} className={styles.backButton}>
      <img src={arrowIcon} alt="뒤로가기" className={styles.backButton} />
    </button>
  );
};

export default BackButton;
