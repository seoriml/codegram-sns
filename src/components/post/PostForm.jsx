import React from "react";
import BackButton from "../ui/button/BackButton";
import ImageUploadButton from "../ui/button/ImageUploadButton";
import styles from "./PostForm.module.scss";
import ButtonComponent from "../ui/Button";
import removeIcon from "../../assets/images/icon_close.svg";
import defaultProfileIcon from "../../assets/images/user_profile.svg";
import "../../assets/styles/common.scss";
import useScrollHeader from "../../hooks/useScrollHeader";

const PostForm = ({
  onSubmit,
  content,
  setContent,
  images,
  setImages,
  previews,
  setPreviews,
  author,
}) => {
  const isVisible = useScrollHeader();

  // 게시글 내용 변경 함수
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 이미지 변경 함수
  const handleImageChange = (files) => {
    if (files.length + previews.length < 4) {
      Array.from(files).forEach((file) => {
        const findImage = images.find((el) => el.name === file.name);
        if (findImage) {
          alert("동일한 이미지가 존재합니다.");
          return;
        }
        const imageUrl = URL.createObjectURL(file); // 파일의 URL 생성
        setImages((prevImages) => [...prevImages, file]);
        setPreviews((prevPreviews) => [...prevPreviews, imageUrl]);
      });
    } else {
      alert("최대 3장의 이미지만 업로드할 수 있습니다.");
    }
  };

  // 이미지 제거 함수
  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  // previews가 문자열인 경우 배열로 변환
  const previewArray = Array.isArray(previews)
    ? previews.filter((url) => url !== `${import.meta.env.VITE_API_URL}/`)
    : previews
        .split(",")
        .filter((url) => url && url !== `${import.meta.env.VITE_API_URL}/`);

  // 엔터 키로 줄바꿈하고 제출 방지
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setContent((prev) => prev + "\n");
    }
  };

  const profileImageSrc =
    author?.image === "http://146.56.183.55:5050/Ellipse.png" ||
    author?.image === "https://estapi.mandarin.weniv.co.kr/undefined"
      ? defaultProfileIcon
      : author?.image;

  return (
    <form onSubmit={onSubmit} className="paddingTopForHeader">
      <header className={`${isVisible ? "header" : "headerHidden"}`}>
        <BackButton aria-label="뒤로 가기" />
        <ButtonComponent
          buttonType="saveType"
          type="submit"
          className={styles.saveType}
        >
          업로드
        </ButtonComponent>
      </header>

      <div className={styles.body}>
        {author && (
          <img
            className={styles.profileImg}
            src={profileImageSrc}
            alt={`${author?.username}의 프로필사진`}
          />
        )}
        <div className={styles.uploadContainer}>
          <div className={styles.contentsWrapper}>
            <label htmlFor="content"  className="hiddenLabel">
              게시글 내용 입력
            </label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              placeholder=" 게시글 입력하기..."
              onKeyDown={handleKeyDown}
            />
            {previewArray.length > 0 && (
              <>
                <div className={styles.previewContainer}>
                  {previewArray.map((preview, index) => (
                    <div className={styles.previewWrapper} key={index}>
                      <img
                        src={preview}
                        alt={`업로드 이미지 ${index + 1}`}
                        className={styles.previewImages}
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className={styles.removeButton}
                      >
                        <img src={removeIcon} alt="이미지 삭제" />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className={styles.imageUploadButton}>
            <ImageUploadButton
              onChange={handleImageChange}
              existingFiles={images}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
