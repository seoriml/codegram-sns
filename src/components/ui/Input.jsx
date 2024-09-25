import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, ...props }) => {
  return (
    <div className={styles["input-container"]}>
      <label className={styles["input-label"]}>{label}</label>
      <input className={styles["input-field"]} {...props} />
    </div>
  );
};

export default Input;

// 사용 예시
// <form>
//   <Input label="이메일" type="email" placeholder="이메일을 입력하세요" />
// </form>
