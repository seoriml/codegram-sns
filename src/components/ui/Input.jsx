import React from "react";
import styles from "./Input.module.scss";

const Input = ({ name, label, warningMessage, ...props }) => {
  return (
    <div className={styles.inputContainer} style={warningMessage ? { "--warning-message": `"${warningMessage}"` } : {}}>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>
      <input id={name} name={name} className={styles.inputField} {...props} />
    </div>
  );
};

export default Input;

// 사용 예시
// <form>
//   <Input name="clientId" label="이메일" type="email" placeholder="이메일을 입력하세요" />
// </form>
