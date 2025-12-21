// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import { Flip, ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      <Routes>
        <Route path="/" element={<div>home</div>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
