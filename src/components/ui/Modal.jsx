//Modal.jsx

import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({
  isOpen,
  title,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <h2>{title}</h2>
        <div className={styles["modal-buttons"]}>
          <button onClick={onCancel}>{cancelText}</button>
          <button onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
