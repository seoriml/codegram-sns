import React from "react";

const ImageUploadButton = ({ onChange }) => {
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      if (files.length > 3) {
        alert("최대 3장의 이미지만 업로드할 수 있습니다.");
        return;
      }

      Array.from(files).forEach((file) => onChange(file));
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
      <label htmlFor="imageUpload" className="upload-button">
        이미지 업로드
      </label>
    </div>
  );
};

export default ImageUploadButton;
