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
        <Route path="/Banking-System-Frontend/" element={<HomePage />} />
        <Route
          path="/Banking-System-Frontend/customersList"
          element={<Customers />}
        />
        <Route
          path="/Banking-System-Frontend/transfer/:id"
          element={<Transfer />}
        />
        <Route
          path="/Banking-System-Frontend/transferHistory"
          element={<TransactionHistory />}
        />
      </Routes>
    </>
  );
}

export default App;
