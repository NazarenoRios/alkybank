import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [isLogged,setIsLogged] = useState(false)

  const token = localStorage.getItem("token");

  const headers = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + token,
  };

  useEffect(() => {
    axios
      .get(
        "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me",
        { headers: headers }
      )
      .then((res) => {
        localStorage.setItem("first_name",res.data.first_name)
        localStorage.setItem("last_name",res.data.last_name)
        localStorage.setItem("email",res.data.email)
        setIsLogged(true)
      });
  }, [isLogged]);

  console.log(isLogged)
  
  return (
    <>
      <Routes>
        {isLogged ? <Route path="/" element={<h1>Aca va si esta logeado</h1>} /> : <Route path="/" element={<Homepage />} />}
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
