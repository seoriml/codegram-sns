import React from "react";
import styles from "./Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modalSlice";

const OptionsModal = ({ actionHandlers }) => {
  const dispatch = useDispatch();
  const {
    isOpen,
    modalType,
    options = [],
  } = useSelector((state) => state.modal);

  if (!isOpen || modalType !== "options") return null;

  const handleOptionClick = (index) => {
    const selectedActionId = options[index]?.actionId;
    if (selectedActionId && actionHandlers[selectedActionId]) {
      actionHandlers[selectedActionId]();
    }
    dispatch(closeModal());
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            style={{ color: option.color }}
          >
            {option.text}
          </button>
        ))}
        <button onClick={() => dispatch(closeModal())}>닫기</button>
      </div>
    </div>
  );
};

export default OptionsModal;
