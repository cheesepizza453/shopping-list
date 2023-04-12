import React from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { budgetChange } from "../store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ closeModal }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

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
            placeholder={state.budget}
            onChange={(event) => {
              dispatch(budgetChange(event.target.value));
            }}
          />
          <button className="modal_btn" onClick={closeModal}>
            설정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
