import React from 'react';
import styles from './Button.module.scss';

const ButtonComponent = ({ children, onClick, disabled, buttonType='buttonBasic' }) => {

  // 항상 적용되는 버튼 기본타입은 buttonBasic 입니다.
  // 만약 buttonType이 buttonLogin 이라면
  // 해당 컴포넌트 버튼 타입은 styles.buttonLogin가 적용됩니다.
  const buttonStyle = `
    ${styles.buttonBasic} ${styles[buttonType] || styles.buttonBasic}
  `;

  return (
    <button className={buttonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonComponent;

// 사용 예시
// <ButtonComponent onClick={() => console.log('로그인 버튼 클릭')} buttonType="buttonLoign" disabled="disabled">
//   로그인
// </ButtonComponent>