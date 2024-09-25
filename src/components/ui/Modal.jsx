import React from "react";
import styles from "./Modal.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const {
    isOpen,
    title,
    confirmButtonText,
    cancelButtonText,
    confirmAction,
    cancelAction,
  } = useSelector((state) => state.modal);


  if (!isOpen) return null;

  const handleConfirm = () => {
    if (confirmAction) {
      confirmAction();
    }
    dispatch(closeModal());
  };

  const handleCancel = () => {
    if (cancelAction) {
      cancelAction();
    }
    dispatch(closeModal());
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <h2 className={styles["modal-title"]}>{title}</h2>
        <div className={styles["modal-buttons"]}>
          <button className={styles["button-cancel"]} onClick={handleCancel}>
            {cancelButtonText}
          </button>
          <button className={styles["button-confirm"]} onClick={handleConfirm}>
            {confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
