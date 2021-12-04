import React, { useState } from "react";
import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="expense-button" onClick={clickHandler}>
        change title
      </button>
    </div>
  );
}

export default ExpenseItem;
