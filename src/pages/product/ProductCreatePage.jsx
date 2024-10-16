import React, { useState } from "react";
import ProductForm from "../../components/product/ProductForm";
import useAPI from "../../hooks/useAPI";

export default function ProductCreatePage() {
  const { post, token } = useAPI();
  const [productImage, setProductImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState(1);

  // 이미지 업로드 함수
  const uploadImage = async (productImage) => {
    if (!productImage) {
      alert("등록된 이미지가 없습니다");
      return "";
    }
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
    const filename = await uploadImage(productImage);
    console.log("imagePath", imagePath);

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
      alert(`error: ${response.payload}`);
    } else {
      alert("링크가 등록되었습니다.");
      setItemName("");
      setLink("");
      setProductImage(null);
      setPrice(1);
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
        setPrice={setPrice}
        productImage={productImage}
        setProductImage={setProductImage}
      />
    </div>
  );
}
