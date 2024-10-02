import React from "react";
import styles from "./LoginMain.module.scss";
import { Link } from "react-router-dom";

export default function LoginMain() {
  return (
    <div className={styles.container}>
      <section className={styles.logoContainer}>
        <div className={styles.logo}></div>
      </section>
      <section className={styles.btnContainer}>
        <Link to={"/login"} className={styles.btn1}>
          이메일로 로그인
        </Link>
        <Link to={"/signup"} className={styles.btn1}>
          회원가입
        </Link>
      </section>
    </div>
  );
}
