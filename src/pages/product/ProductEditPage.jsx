import React, { useState, useEffect } from "react";
import ProductForm from "../../components/product/ProductForm";
import useAPI from "../../hooks/useAPI";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/ui/Loading";

export default function ProductEditPage() {
  const { id } = useParams();
  const { get, put, token, loading } = useAPI();
  const [productImage, setProductImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const price = 1;

  const navigate = useNavigate();

  // 상품 상세 정보 가져오기 함수
  const getProductDetail = async () => {
    const response = await get(`${import.meta.env.VITE_API_URL}/product/detail/${id}`, "application/json", token);
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

    const response = await fetch(`${import.meta.env.VITE_API_URL}/image/uploadfile`, {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    setProductImage(json.filename);
    return json.filename;
  };

  // 상품 수정 함수
  const handleEditProduct = async (e) => {
    e.preventDefault();

    let filename;
    // 이미지가 변경된 경우에만 업로드
    if (productImage instanceof File) {
      filename = await uploadImage(productImage);
    } else {
      filename = productImage;
    }
    const response = await put(
      `${import.meta.env.VITE_API_URL}/product/${id}`,
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
      // console.log(`error: ${response.payload}`);
    } else {
      alert("수정되었습니다.");
      navigate(`/product/detail/${id}`);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <ProductForm
        onSubmit={handleEditProduct}
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
