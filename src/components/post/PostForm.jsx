import React, { useState } from "react";
import BackButton from "../ui/button/BackButton";
import ImageUploadButton from "../ui/button/ImageUploadButton";

const PostForm = ({ onSubmit }) => {
  // 상태 관리: 게시글 내용, 이미지 배열, 이미지 미리보기 배열
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // 게시글 내용 변경 핸들러
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (file) => {
    // 최대 3장 이미지 제한
    if (images.length < 3) {
      setImages((images) => [...images, file]); // 이미지 배열에 추가

      // 미리보기 이미지 URL 생성
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPreviews((previews) => [...previews, imageUrl]); // 미리보기 배열에 추가
      }
    } else {
      alert("최대 3장의 이미지만 업로드할 수 있습니다.");
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  // 이미지 제거 핸들러
  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <BackButton />
        <button type="submit">업로드</button>
      </div>
      <div>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="게시글 입력하기"
        />
        {previews.length > 0 && (
          <div>
            {previews.map((preview, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                }}
              >
                <img
                  src={preview}
                  alt={`업로드 이미지 ${index + 1}`}
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <ImageUploadButton onChange={handleImageChange} />
    </form>
  );
};

export default PostForm;
