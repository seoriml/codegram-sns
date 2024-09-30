import React from "react";
import BackButton from "../ui/button/BackButton";
import ImageUploadButton from "../ui/button/ImageUploadButton";

const PostForm = ({
  onSubmit,
  content,
  setContent,
  images,
  setImages,
  previews,
  setPreviews,
}) => {
  // 게시글 내용 변경 함수
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 이미지 변경 함수
  const handleImageChange = (file) => {
    if (images.length + previews.length < 4) {
      const imageUrl = URL.createObjectURL(file); // 파일의 URL 생성
      setImages((prevImages) => [...prevImages, file]);
      setPreviews((prevPreviews) => [...prevPreviews, imageUrl]);
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
    ? previews
    : previews.split(",").filter((url) => url);

  return (
    <form onSubmit={onSubmit}>
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
        {previewArray.length > 0 && (
          <div>
            {previewArray.map((preview, index) => (
              <div key={index} style={{ position: "relative" }}>
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
      <ImageUploadButton onChange={handleImageChange} existingFiles={images} />
    </form>
  );
};

export default PostForm;
