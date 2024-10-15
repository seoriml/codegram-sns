import React from 'react';
import Spinner from '/loading.gif';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadContainer}>
      <img src={Spinner} className={styles.loadImage} alt="로딩 중..." />
    </div>
  );
}

export default Loading;