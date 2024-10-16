// 회원가입 후 프로필 초기 설정하는 페이지
import React from "react";
import AuthForm from "../../components/auth/AuthForm";
import styles from "./ProfileSetup.module.scss";

export default function ProfileSetup() {
  return (
    <div className={styles.container}>
      <h1>프로필 설정</h1>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <AuthForm />
    </div>
  );
}
