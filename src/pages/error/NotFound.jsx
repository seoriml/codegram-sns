import React from "react";
import styles from "../error/NotFound.module.scss";
import buttonStyles from "../../components/ui/Button.module.scss";
import errorIcon from "../../assets/images/icon_404.svg";
import ButtonComponent from "../../components/ui/Button";

const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  }
  return (
    <section className={styles.errorContainer}>
      <img src={errorIcon} className={styles.errorBalloon} alt="404 Not Found" />
      <h1 className={styles.errorText}>페이지를 찾을 수 없습니다. :(</h1>
      <ButtonComponent onClick={handleGoBack} className={buttonStyles.basicType}>
        이전 페이지
      </ButtonComponent>
    </section>
  );
}

export default NotFound;