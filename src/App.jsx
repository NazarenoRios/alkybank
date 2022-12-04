import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

//Pages
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import SignUp from "./pages/SignUp"
import Loading from "./pages/Loading";

import TopupMoney from "./pages/TopupMoney";
import Payments from "./pages/Payments"
import Balance from "./pages/Balance";


function App() {
  const { isAuthenticated, isLoading } = useAuth();
  
  return (
    <>
    <ToastContainer/>
      <Routes>
        {isAuthenticated ? <Route path="/" element={<h1>Aca va si esta logeado</h1>} /> : <Route path="/" element={<Homepage />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to={"404"} />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/topup" element={<TopupMoney />} />
        <Route path="/payments" element={<Payments />}/>
        <Route path="/balance" element={<Balance/>} />
      </Routes>
    </>
  )
}
export default App