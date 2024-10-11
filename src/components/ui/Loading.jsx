import React from 'react';
import Spinner from '/loading.gif';

const Loading = () => {
  return (
    <img src={Spinner} alt="로딩 중..." />
  );
}

export default Loading;