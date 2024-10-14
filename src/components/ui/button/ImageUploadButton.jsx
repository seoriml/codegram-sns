import React from "react";
import fileUploadIcon from "../../../assets/images/file_upload_button_fill.svg";

const ImageUploadButton = ({ onChange }) => {
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      if (files.length > 3) {
        alert("최대 3장의 이미지만 업로드할 수 있습니다.");
        return;
      }

      onChange(files);

      e.target.value = "";
    }
  };

  return (
    <div>
      <input
        id="imageUpload"
        type="file"
        onChange={handleImageChange}
        accept=".jpg, .jpeg, .png, .gif, .bmp, .tif, .heic"
        style={{ display: "none" }}
        multiple
      />
      <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
        <img src={fileUploadIcon} alt="이미지업로드버튼" />
      </label>
    </div>
  );
};

export default ImageUploadButton;
