import React, { useState, useEffect } from "react";
import ProductForm from "../../components/product/ProductForm";
import useAPI from "../../hooks/useAPI";
import { useParams } from "react-router-dom";

export default function ProductEditPage() {
  const { id } = useParams();
  const { get, post, token } = useAPI();
  const [productImage, setProductImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const price = 1;

  // 게시물 상세 정보 가져오기 함수
  const getProductDetail = async () => {
    const response = await get(
      `${import.meta.env.VITE_API_URL}/product/detail/${id}`,
      "application/json",
      token
    );
    console.log(response);

    setProductImage(response.payload.product.itemImage);
    setItemName(response.payload.product.itemName);
    setLink(response.payload.product.link);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

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
