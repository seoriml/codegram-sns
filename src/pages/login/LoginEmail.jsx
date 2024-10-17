import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import styles from "./LoginEmail.module.scss";

export default function LoginEmail() {
  return (
    <div className={styles.container}>
      <h1>로그인</h1>
      <LoginForm />
    </div>
  );
}
