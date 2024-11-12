// 기본 이미지 URL 목록
const defaultImageUrls = [
    "http://146.56.183.55:5050/Ellipse.png",
    "https://estapi.mandarin.weniv.co.kr/undefined"
  ];
  
  // 기본 이미지가 아닌 경우 원본 이미지를 반환하는 헬퍼 함수
  export const getProfileImageSrc = (image, defaultImage) => {
    return !image || defaultImageUrls.includes(image) ? defaultImage : image;
  };