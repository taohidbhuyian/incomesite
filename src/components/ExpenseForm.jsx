import React, { useState } from "react";
import Menu from "./Menu";

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save expense transaction to the state
    console.log("Expense saved:", { amount, description });
    setAmount("");
    setDescription("");
  };
  return (
    <div>
      <Menu />
      <form onSubmit={handleSubmit}>
        <h2>Expense Form</h2>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
