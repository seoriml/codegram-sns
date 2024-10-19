import React, { useState, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import VerticalButton from "../../components/ui/button/VerticalButton";
import BackButton from "../../components/ui/button/BackButton";
import Styles from "../../components/product/Product.module.scss";
import PostFeedStyles from "../../components/feed/PostFeed.module.scss";
import "../../assets/styles/common.scss";
import useScrollHeader from "../../hooks/useScrollHeader";
import inputStyles from "../../components/ui/Input.module.scss";
import OptionsModal from "../../components/ui/modal/OptionsModal";
import ConfirmModal from "../../components/ui/modal/ConfirmModal";
import moreIcon from "../../assets/images/icon_more_vertical.svg";
import { openConfirmModal } from "../../redux/confirmModalSlice";
import { openOptionsModal, closeOptionsModal } from "../../redux/optionsModalSlice";
import { useDispatch } from "react-redux";
import Loading from "../../components/ui/Loading";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { get, del, token, loading } = useAPI();
  const [productImage, setProductImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [link, setLink] = useState("");
  const [productId, setProductId] = useState("");
  const [accountnameByProduct, setAccountnameByProduct] = useState("");
  //   const price = 1;

  const navigate = useNavigate();
  const isVisible = useScrollHeader();
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  // 상품 상세 정보 가져오기 함수
  const getProductDetail = async () => {
    const response = await get(`${import.meta.env.VITE_API_URL}/product/detail/${id}`, "application/json", token);
    setProductImage(response.payload.product.itemImage);
    setItemName(response.payload.product.itemName);
    setLink(response.payload.product.link);
    setProductId(response.payload.product.id);
    setAccountnameByProduct(response.payload.product.author.accountname);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  // 이미지 미리보기 URL 생성 함수
  const imagePreviewUrl =
    productImage instanceof File
      ? URL.createObjectURL(productImage)
      : `${import.meta.env.VITE_API_URL}/${productImage}`;

  // 상품 삭제 함수
  const handleDelete = async () => {
    {
      const response = await del(`${import.meta.env.VITE_API_URL}/product/${id}`, "application/json", token);

      // //FAIL
      // // 상품이 없을 때
      // 등록된 상품이 없습니다.
      // // 상품을 등록한 사용자가 아닐 때
      // 잘못된 요청입니다. 로그인 정보를 확인하세요.
      if (response.meta?.rejectedWithValue) {
        if (response.payload === "HTTP error.! status: 403") {
          alert("잘못된 요청입니다. 로그인 정보를 확인하세요.");
          navigate(`/home`);
        } else if (response.payload === "HTTP error.! status: 404") {
          alert("등록된 상품이 없습니다.");
          navigate(`/home`);
        } else {
          alert(`${response.payload.message || "상품 삭제에 실패했습니다."}`);
        }
      } else {
        alert("삭제되었습니다.");
        if (path.includes("detail")) {
          navigate(-1);
        } else {
          window.location.reload();
        }
      }
    }
  };

  // 삭제,수정,닫기 옵션모달
  const actionHandlersOptions = {
    optionDelete: () => {
      handleOpenConfirmModal();
    },
    optionEdit: () => {
      navigate(`/product/edit/${id}`);
      dispatch(closeOptionsModal());
    },
  };
  const handleOpenOptionsModal = () => {
    if (!path.includes("detail")) {
      setSelectedPost();
    }
    const options = [
      { text: "삭제", actionId: "optionDelete" },
      { text: "수정", actionId: "optionEdit" },
    ];
    dispatch(
      openOptionsModal({
        options: options,
      })
    );
  };

  // 삭제 컨펌모달
  const actionHandlersConfirm = {
    confirmDelete: async () => {
      await handleDelete();
      dispatch(closeOptionsModal());
    },
  };

  const handleOpenConfirmModal = () => {
    dispatch(
      openConfirmModal({
        modalType: "confirm",
        modalTitle: "상품을 삭제할까요?",
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
        confirmActionId: "confirmDelete",
      })
    );
  };

  const sessionMyAccountname = sessionStorage.getItem("myAccountname");

  const isMyProduct = sessionMyAccountname === accountnameByProduct;
  //   console.log(sessionMyAccountname);
  //   console.log(accountnameByProduct);

  if (loading) return <Loading />;
  return (
    <div>
      <div className="paddingTopForHeader">
        <header className={`${isVisible ? "header" : "headerHidden"}`}>
          <BackButton />
          {isMyProduct && (
            <button className={PostFeedStyles.openModal} onClick={handleOpenOptionsModal} aria-label="옵션 열기">
              <img src={moreIcon} alt="더보기" />
            </button>
          )}
        </header>

        <div className={Styles.body}>
          <>
            <label className={inputStyles.inputLabel}>썸네일</label>
            <div className={Styles.imageWrapper}>
              {imagePreviewUrl && imagePreviewUrl !== `${import.meta.env.VITE_API_URL}/null` ? (
                <img src={imagePreviewUrl} alt="대표 이미지" />
              ) : null}
            </div>
          </>

          <div className={inputStyles.inputContainer}>
            <label className={inputStyles.inputLabel}>사이트 이름</label>
            <p className={inputStyles.inputField}>{itemName}</p>
          </div>
          <div className={inputStyles.inputContainer}>
            <label className={inputStyles.inputLabel}>링크</label>
            <a
              href={link}
              target="_blank"
              className={inputStyles.inputField}
              style={{
                display: "block",
                width: "100%",
                whiteSpace: "normal",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {link}
            </a>
          </div>
        </div>
      </div>
      {(path.includes("detail") || productId === id) && (
        <>
          <OptionsModal actionHandlers={actionHandlersOptions} />
          <ConfirmModal actionHandlers={actionHandlersConfirm} />
        </>
      )}
    </div>
  );
}
