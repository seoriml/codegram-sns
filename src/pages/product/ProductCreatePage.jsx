import React, { useState } from "react";
import ProductForm from "../../components/product/ProductForm";
import useAPI from "../../hooks/useAPI";
import { useNavigate } from "react-router-dom";

export default function ProductCreatePage() {
  const navigate = useNavigate();
  const { post, token } = useAPI();
  const [productImage, setProductImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const price = 1;

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

  // 이미지 업로드 함수
  const uploadImage = async (productImage) => {
    const formData = new FormData();
    formData.append("image", productImage);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/image/uploadfile`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    setProductImage(json.filename);
    return json.filename;
  };

  // 게시글 업로드 함수
  const handleUploadProduct = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const filename = await uploadImage(productImage);
    const response = await post(
      `${import.meta.env.VITE_API_URL}/product`,
      {
        product: {
          itemName,
          price,
          link,
          itemImage: filename,
        },
      },
      "application/json",
      token
    );

    if (response.meta.rejectedWithValue) {
      console.log(`error: ${response.payload}`);
    } else {
      alert("링크가 등록되었습니다.");
      setItemName("");
      setLink("");
      setProductImage(null);
      const productId = response.payload.product.id;
      navigate(`/product/detail/${productId}`);
    }
  };

  return (
    <div>
      <ProductForm
        onSubmit={handleUploadProduct}
        itemName={itemName}
        setItemName={setItemName}
        link={link}
        setLink={setLink}
        price={price}
        productImage={productImage}
        setProductImage={setProductImage}
      />
    </div>
  );
}
