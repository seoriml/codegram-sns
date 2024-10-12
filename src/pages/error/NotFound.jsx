import React from "react";
import styles from "../error/NotFound.module.scss";
import buttonStyles from "../../components/ui/Button.module.scss";
import errorIcon from "../../assets/images/icon_404.svg";

const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  }
  return (
    <div className={styles.errorContainer}>
      <img src={errorIcon} className={styles.errorBalloon} alt="404 Not Found" />
      <h1 className={styles.errorText}>페이지를 찾을 수 없습니다. :(</h1>
      <button onClick={handleGoBack} className={buttonStyles.buttonPage}>이전 페이지</button>
    </div>
  );
}

export default NotFound;