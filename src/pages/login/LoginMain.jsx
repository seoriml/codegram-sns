import React from "react";
import styles from "./LoginMain.module.scss";
import { Link } from "react-router-dom";
import loginIconEmail from "../../assets/images/login_icon_email.svg";
import loginIconJoin from "../../assets/images/login_icon_join.svg";

export default function LoginMain() {
  return (
    <div className={styles.container}>
      <section className={styles.logoContainer}>
        <div className={styles.logo}></div>
        <div className={styles.textLogo}></div>
        <span className={styles.description}>코드로 성장하는 개발자들의 공간</span>
      </section>
      <section className={styles.btnContainer}>
        <Link to={"/login"} className={styles.btnEmailLogin}>
          <img src={loginIconEmail} alt="로그인 아이콘" className={styles.icon} />
          <span className={styles.text}>이메일로 로그인</span>
        </Link>
        <Link to={"/signup"} className={styles.btnSignUp}>
          <img src={loginIconJoin} alt="회원가입 아이콘" className={styles.icon} />
          <span className={styles.text}>회원가입</span>
        </Link>
      </section>
    </div>
  );
}
