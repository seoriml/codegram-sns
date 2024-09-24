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
        <h2 className={styles["modal-title"]}>{title}</h2>
        <div className={styles["modal-buttons"]}>
          <button className={styles["button-cancel"]} onClick={onCancel}>
            {cancelText}
          </button>
          <button className={styles["button-confirm"]} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
