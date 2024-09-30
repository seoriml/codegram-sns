import React, { useState, useEffect } from "react";
import BackButton from "../ui/button/BackButton";
import ImageUploadButton from "../ui/button/ImageUploadButton";
import useAPI from "../../hooks/useAPI";

const PostForm = () => {
  const { data, loading, error, post } = useAPI();
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  //로그인 함수
  useEffect(() => {
    post(`${import.meta.env.VITE_API_URL}/user/login`, {
      user: {
        email: "test@test2.com",
        password: "String21312",
      },
    });
  }, []);

  //이미지 업로드 함수
  const uploadImages = async (images) => {
    if (!Array.isArray(images) || images.length === 0) {
      console.error("이미지가 없습니다", images);
      return "";
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("image", image);
    });
    
     {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/image/uploadfiles`, {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      return json.map((img) => img.filename).join(",") || "";
    } 
  };

  //게시글 등록 함수
  const uploadPost = async () => {
    const token = localStorage.getItem("token");
    const imageString = await uploadImages(images);

    {
      const response = await post(
        `${import.meta.env.VITE_API_URL}/post`,
        {
          post: {
            content: content,
            image: imageString,
          },
        },
        "application/json",
        token
      );
      console.log("게시글 업로드 성공:", response);
      alert("게시글이 성공적으로 업로드되었습니다!");
       setContent("");
       setImages([]);
       setPreviews([]);
    } 
  };

  //폼제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadPost();
  };

  //게시글 내용 변경 함수
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  //이미지 변경 함수
  const handleImageChange = (file) => {
    if (images.length < 3) {
      setImages((prevImages) => [...prevImages, file]);
      const imageUrl = URL.createObjectURL(file);
      setPreviews((prevPreviews) => [...prevPreviews, imageUrl]);
    } else {
      alert("최대 3장의 이미지만 업로드할 수 있습니다.");
    }
  };

  //이미지 제거 함수
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
      <ImageUploadButton onChange={handleImageChange} />
    </form>
  );
};

export default PostForm;
