import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ closeModal, setBudget, setBudget2, onChangeAccount }) => {
  return (
    <div>
      <div className="dimm"></div>
      <div className="modal">
        <button className="modal_close_btn" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="inner">
          <p className="modal_title">내 장보기 예산</p>
          <input
            className="moneymoney"
            type="text"
            placeholder="123,456"
            onChange={onChangeAccount}
          />
          <button className="modal_btn" onClick={setBudget2}>
            설정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
