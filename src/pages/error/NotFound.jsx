import React from "react";
import { Link } from "react-router-dom";
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
      <p className={styles.errorText}>페이지를 찾을 수 없습니다. :(</p>
      <Link onClick={handleGoBack} className={buttonStyles.buttonPage}>이전 페이지</Link>
    </div>
  );
}

export default NotFound;