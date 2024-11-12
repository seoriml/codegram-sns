import React from "react";
import { useDispatch } from "react-redux";
import {
  openOptionsModal,
  closeOptionsModal,
} from "../../../redux/optionsModalSlice";
import {
  openConfirmModal,
  closeConfirmModal,
} from "../../../redux/confirmModalSlice";
import OptionsModal from "../modal/OptionsModal";
import ConfirmModal from "../modal/ConfirmModal";
import moreIcon from "../../../assets/images/icon_more_vertical.svg";

const VerticalButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      openOptionsModal({
        modalType: "options",
        options: [{ text: "로그아웃", actionId: "logout" }],
      })
    );
  };

  const handleOptionActions = {
    logout: () => {
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

  const handleConfirmActions = {
    confirmLogout: () => {
      localStorage.removeItem("userToken");
      window.location.href = "/";
      dispatch(closeConfirmModal());
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
