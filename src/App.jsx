import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

//Pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import TopupMoney from "./pages/TopupMoney";
import Payments from "./pages/Payments"
import Balance from "./pages/Balance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to={"404"} />} />
        <Route path="/topup" element={<TopupMoney />} />
        <Route path="/payments" element={<Payments />}/>
        <Route path="/balance" element={<Balance/>} />
      </Routes>
    </>
  );
}
export default App;
