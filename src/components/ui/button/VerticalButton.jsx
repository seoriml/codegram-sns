import React from "react";
import { useDispatch } from "react-redux";
import { openOptionsModal, closeOptionsModal } from "../../../redux/optionsModalSlice";
import { openConfirmModal, closeConfirmModal } from "../../../redux/confirmModalSlice";
import OptionsModal from "../modal/OptionsModal";
import ConfirmModal from "../modal/ConfirmModal";
import moreIcon from "../../../assets/images/icon_more_vertical.svg";

const VerticalButton = () => {
  const dispatch = useDispatch();

  // 옵션 모달(설정 및 개인정보/로그아웃)을 열기 위한 핸들러
  const handleClick = () => {
    dispatch(
      openOptionsModal({
        modalType: "options",
        options: [{ text: "로그아웃", actionId: "logout" }],
      })
    );
  };

  // 옵션 모달에서 사용할 액션 핸들러
  const handleOptionActions = {
    logout: () => {
      // 로그아웃 확인 모달 열기
      dispatch(
        openConfirmModal({
          modalTitle: "로그아웃하시겠어요?",
          confirmButtonText: "로그아웃",
          cancelButtonText: "취소",
          confirmActionId: "confirmLogout",
        })
      );
      dispatch(closeOptionsModal());
    },
  };

  // 로그아웃 확인 모달에서 사용할 액션 핸들러
  const handleConfirmActions = {
    confirmLogout: () => {
      // console.log("로그아웃 확정됨");
      // 로그아웃 구현 (localStorage에서 토큰을 제거하고 로그인 페이지로 리다이렉트)
      localStorage.removeItem("userToken");
      window.location.href = "/";
      dispatch(closeConfirmModal()); // 확인 모달 닫기
    },
  };

  return (
    <div>
      <button onClick={handleClick} style={{ width: "100%" }}>
        <img src={moreIcon} alt="더보기" />
      </button>
      <OptionsModal actionHandlers={handleOptionActions} />
      <ConfirmModal actionHandlers={handleConfirmActions} />
    </div>
  );
};

export default VerticalButton;
