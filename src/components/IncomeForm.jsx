import React, { useState } from "react";
import Menu from "./Menu";

const IncomeForm = () => {
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
    // Save income transaction to the state
    console.log("Income saved:", { amount, description });
    setAmount("");
    setDescription("");
  };
  return (
    <div>
      <Menu />
      <form onSubmit={handleSubmit}>
        <h2>Income Form</h2>
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
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
