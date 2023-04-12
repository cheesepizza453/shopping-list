import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { budgetChange } from "../store.js";
import "./Budget.css";

const Budget = ({ showModal, budgetChange, test }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <section className="budget_wrap">
      <h1 className="title">장보기 예산</h1>
      <div className="inner">
        <p className="budget_container">
          ₩<span className="budget">{state.budget}</span>
        </p>
        <button className="set_budget" onClick={showModal}>
          설정하기
        </button>
      </div>
    </section>
  );
};

export default Budget;
