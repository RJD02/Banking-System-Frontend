import React from "react";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";
import Customers from "./pages/Customers/Customers";
import Transfer from "./pages/Transfer/Transfer";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customersList" element={<Customers />} />
        <Route path="/transfer/:id" element={<Transfer />} />
        <Route path="/transferHistory" element={<TransactionHistory />} />
      </Routes>
    </>
  );
}

export default App;
