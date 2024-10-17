import React from "react";
import SignupForm from "../../components/auth/SignupForm";
import styles from "../login/LoginEmail.module.scss";

export default function Signup() {
  return (
    <div className={styles.container}>
      <h1>이메일로 회원가입</h1>
      <SignupForm />
    </div>
  );
}
