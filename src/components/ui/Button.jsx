import React from "react";
import buttonStyles from "./Button.module.scss";

const ButtonComponent = ({
  children,
  onClick,
  disabled,
  buttonType = "basicType",
  style,
  className,
}) => {
  // 항상 적용되는 기본 버튼타입 : basicType,
  // buttonStyles이 loginType 이라면 buttonStyles.loginType 적용
  const buttonStyle = `
    ${buttonStyles.basicType} ${
    buttonStyles[buttonType] || buttonStyles.basicType
  } ${className}
  `;

  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;

// 사용 예시
// <ButtonComponent onClick={() => console.log('로그인 버튼 클릭')} buttonType="buttonLogin" disabled="disabled">
//   로그인
// </ButtonComponent>
