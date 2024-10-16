import React, { useState } from "react";
import BackButton from "../ui/button/BackButton";
import ButtonComponent from "../ui/Button";
import Input from "../ui/Input";
import ImageUploadButton from "../ui/button/ImageUploadButton";

export default function ProductForm({
  onSubmit,
  productImage,
  setProductImage,
  itemName,
  setItemName,
  link,
  setLink,
}) {
  // 이미지 파일 선택 함수
  const handleImageChange = (files) => {
    if (files && files[0]) {
      const file = files[0];
      setProductImage(file);
    }
  };
  // 이미지 미리보기 URL 생성 함수
  const imagePreviewUrl =
    productImage instanceof File ? URL.createObjectURL(productImage) : null;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <BackButton />
          <ButtonComponent buttonType="buttonPost" type="submit">
            저장
          </ButtonComponent>
        </div>

        <div>
          <div>
            <label>대표 이미지 등록</label>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "204px",
                background: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imagePreviewUrl && ( // 이미지 미리보기를 위한 URL 사용
                <img
                  src={imagePreviewUrl}
                  alt="대표 이미지"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                }}
              >
                <ImageUploadButton onChange={handleImageChange} />
              </div>
            </div>
          </div>

          <Input
            name="itemName"
            label="사이트 이름"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />

          <Input
            name="link"
            label="등록할 링크"
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
