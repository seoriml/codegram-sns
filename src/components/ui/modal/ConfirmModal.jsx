import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeConfirmModal } from "../../../redux/confirmModalSlice";
import styles from "./Modal.module.scss";

const ConfirmModal = ({ actionHandlers }) => {
  const dispatch = useDispatch();
  const {
    isOpen,
    modalTitle,
    confirmButtonText,
    cancelButtonText,
    confirmActionId,
  } = useSelector((state) => state.confirmModal);

  // 모달을 닫기 위한 핸들러
  const handleClose = () => {
    dispatch(closeConfirmModal());
  };

  // 확인 버튼 핸들러
  const handleConfirm = () => {
    if (actionHandlers[confirmActionId]) {
      actionHandlers[confirmActionId](); // ID에 맞는 액션 핸들러 호출
    }
    handleClose();
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
