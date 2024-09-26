import React from 'react';
import styles from './Button.module.scss';

export default function Button({ children, buttonType }) {
  const buttonTypesList = {
    loginEnable: 'login-blue-button',
    loginDisable: 'login-skyblue-button',
    signUp: 'login-white-button',
    nonePage: 'page-blue-button',
    profileEnable: 'profile-blue-button',
    profileDisable: 'profile-gray-button',
    followEnable: 'follow-list-blue-button',
    followDisable: 'follow-list-gray-button',
    postEnable: 'post-blue-button',
    postDisable: 'post-skyblue-button'
  };

  return (
    <button className={styles[buttonTypesList[buttonType]]}>{children}</button>
  )
}

// 컴포넌트에서 사용 방법
// <Button buttonType="">내용</Button>