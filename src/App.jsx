import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

//Pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Loading from "./pages/Loading";

//Components
import TopupMoney from "./pages/TopupMoney";
import Payments from "./pages/Payments";
import Dashboard from "./pages/Dashboard";
// import Balances from "./pages/Balances";
import Movements from "./pages/Movements";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Layout } from "./components/layout";
import Sidebar from "./pages/Sidebar";

function App() {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return (
      <DarkModeProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout> } />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/topup" element={<Layout><TopupMoney /></Layout>} />
          <Route path="/payments" element={<Layout><Payments /></Layout>} />
          <Route path="/movements" element={<Layout><Movements /> </Layout>} />
          {/* <Route path="/balance" element={<Layout><Balances /></Layout>} /> */}
          <Route path="/sidebar" element={<Sidebar/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </DarkModeProvider>
    );
  } else {
    return (
      <DarkModeProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Homepage />} />
        </Routes>
      </DarkModeProvider>
    );
  }
}
export default App;
