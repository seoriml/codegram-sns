import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";
import ConfirmModal from "../components/ui/modal/ConfirmModal";
import OptionsModal from "../components/ui/modal/OptionsModal";

const ModalExample2 = () => {
  const dispatch = useDispatch();

  // ConfirmModal
  const actionHandlersConfirm = {
    delete: () => alert("게시글이 삭제되었습니다!"),
  };
  const handleOpenConfirmModal = () => {
    dispatch(
      openModal({
        modalTitle: "게시글을 삭제할까요?",
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
        confirmActionId: "delete",
      })
    );
  };

  // OptionModal
  const actionHandlersOptions = {
    option1: () => alert("옵션 1이 선택되었습니다!"),
    option2: () => console.log("옵션 2가 선택되었습니다!"),
  };

  const handleOpenOptionsModal = () => {
    const options = [
      { text: "옵션 1", color: "red", actionId: "option1" },
      { text: "옵션 2", actionId: "option2" },
    ];

    dispatch(
      openModal({
        modalType: "options",
        options: options,
      })
    );
  };

  return (
    <div>
      <h1>모달 예시</h1>
      <div>
        <button onClick={handleOpenConfirmModal}>컨펌 모달 열기</button>
        <ConfirmModal actionHandlers={actionHandlersConfirm} />
      </div>
      <div>
        <button onClick={handleOpenOptionsModal}>옵션 모달 열기</button>
        <OptionsModal actionHandlers={actionHandlersOptions} />
      </div>
    </div>
  );
};

export default ModalExample2;
