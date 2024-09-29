import React, { useState, useEffect } from "react";
import BackButton from "../ui/button/BackButton";
import ImageUploadButton from "../ui/button/ImageUploadButton";
import useAPI from "../../hooks/useAPI";

const PostForm = ({ onSubmit = () => {} }) => {
  const { post } = useAPI();
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // 로그인 함수
  const loginUser = async () => {
    try {
      const response = await post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        {
          user: {
            email: "test@test2.com",
            password: "String21312",
          },
        }
      );

      if (response && response.payload.user && response.payload.user.token) {
        localStorage.setItem("token", response.payload.user.token);
      } else {
        console.error("로그인 실패: 토큰이 없습니다.");
      }
    } catch (err) {
      console.error("로그인 중 오류 발생:", err);
    }
  };

  useEffect(() => {
    loginUser();
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

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/image/uploadfiles`, {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      return json.map((img) => img.filename).join(",") || "";
    } catch (err) {
      console.error("이미지 업로드 중 오류 발생:", err);
      return "";
    }
  };

  //게시글 등록 함수
  const uploadPost = async () => {
    const token = localStorage.getItem("token");
    const imageString = await uploadImages(images);

    try {
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
      if (typeof onSubmit === "function") {
        onSubmit();
      } else {
        console.error("onSubmit이 함수가 아닙니다.");
      }
    } catch (err) {
      console.error("게시글 업로드 중 오류 발생:", err);
    }
  };

  //폼제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadPost();
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (file) => {
    if (images.length < 3) {
      setImages((prevImages) => [...prevImages, file]);
      const imageUrl = URL.createObjectURL(file);
      setPreviews((prevPreviews) => [...prevPreviews, imageUrl]);
    } else {
      alert("최대 3장의 이미지만 업로드할 수 있습니다.");
    }
  };

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
