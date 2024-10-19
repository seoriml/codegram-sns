import React from "react";
import BackButton from "../ui/button/BackButton";
import ButtonComponent from "../ui/Button";
import Input from "../ui/Input";
import ImageUploadButton from "../ui/button/ImageUploadButton";
import Styles from "./ProductForm.module.scss";
import "../../assets/styles/common.scss";
import inputStyles from "../ui/Input.module.scss";
import useScrollHeader from "../../hooks/useScrollHeader";

export default function ProductForm({
  onSubmit,
  productImage,
  setProductImage,
  itemName,
  setItemName,
  link,
  setLink,
}) {
  const isVisible = useScrollHeader();

  // 이미지 파일 선택 함수
  const handleImageChange = (files) => {
    if (files && files[0]) {
      const file = files[0];
      setProductImage(file);
    }
  };
  // 이미지 미리보기 URL 생성 함수
  const imagePreviewUrl =
    productImage instanceof File
      ? URL.createObjectURL(productImage)
      : `${import.meta.env.VITE_API_URL}/${productImage}`;

  // 폼 유효성 검사 함수
  const validateForm = () => {
    if (!productImage) {
      alert("대표 이미지를 업로드해주세요.");
      return false;
    }
    if (!itemName.trim()) {
      alert("사이트 이름을 입력해주세요.");
      return false;
    }
    if (!link.trim()) {
      alert("링크를 입력해주세요.");
      return false;
    }
    if (!/^https?:\/\/\S+$/.test(link)) {
      alert("유효한 URL을 입력해주세요.");
      return false;
    }
    return true;
  };

  // 폼제출
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    onSubmit(e);
  };
  return (
    <form onSubmit={handleSubmit} className="paddingTopForHeader">
      <header className={`${isVisible ? "header" : "headerHidden"}`}>
        <BackButton />
        <ButtonComponent buttonType="saveType" type="submit">
          저장
        </ButtonComponent>
      </header>

      <div className={Styles.body}>
        <>
          <label className={inputStyles.inputLabel}>대표 이미지 등록</label>
          <div className={Styles.imageWrapper}>
            {imagePreviewUrl &&
            imagePreviewUrl !== `${import.meta.env.VITE_API_URL}/null` ? (
              <img src={imagePreviewUrl} alt="대표 이미지" />
            ) : null}
            <div className={Styles.imageUploadButton}>
              <ImageUploadButton onChange={handleImageChange} />
            </div>
          </div>
        </>

        <Input
          name="itemName"
          label="사이트 이름"
          type="text"
          value={itemName}
          placeholder="2~15자 이내여야 합니다."
          onChange={(e) => setItemName(e.target.value)}
          maxLength={15}
        />

        <Input
          name="link"
          label="등록할 링크"
          type="url"
          value={link}
          placeholder="URL을 입력해 주세요."
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
    </form>
  );
}
