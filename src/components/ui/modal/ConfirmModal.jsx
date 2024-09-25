import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../redux/modalSlice"; // closeModal 액션을 import
import styles from "./Modal.module.scss"; // 모달 스타일을 import

const ConfirmModal = ({ actionHandlers }) => {
  const dispatch = useDispatch();
  const {
    isOpen,
    modalTitle,
    confirmButtonText,
    cancelButtonText,
    confirmActionId,
  } = useSelector((state) => state.modal); // confirmActionId를 여기서 가져옵니다.

  // 모달을 닫기 위한 핸들러
  const handleClose = () => {
    dispatch(closeModal());
  };

  // 확인 버튼 핸들러
  const handleConfirm = () => {
    if (actionHandlers[confirmActionId]) {
      actionHandlers[confirmActionId](); // ID에 맞는 액션 핸들러 호출
    }
    handleClose(); // 모달 닫기
  };

  return (
    isOpen && (
      <div className={styles["modal-overlay"]}>
        <div className={styles["modal-content"]}>
          <div className={styles["modal-title"]}>{modalTitle}</div>
          <div className={styles["modal-buttons"]}>
            <button onClick={handleClose}>{cancelButtonText}</button>
            <button
              onClick={handleConfirm}
              className={styles["button-confirm"]}
            >
              {confirmButtonText}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmModal;
