import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import Notfoudpage from "./pages/notfoudpage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          
          <Route path="income" element={<IncomeForm />} />
          <Route path="/expenses" element={<ExpenseForm />} />
          <Route path="*" element={<Notfoudpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
