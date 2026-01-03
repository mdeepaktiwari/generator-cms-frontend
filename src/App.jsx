// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import { Flip, ToastContainer } from "react-toastify";
import GenerateImage from "./page/GenerateImage";
import Rewrite from "./page/Rewrite";
import ImageHistory from "./page/ImageHistory";
import ContentHistory from "./page/ContentHistory";
import ContentDetails from "./page/ContentDetails";

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
        <Route path="/image/generate" element={<GenerateImage />}></Route>
        <Route path="/image/history" element={<ImageHistory />}></Route>
        <Route path="/content/rewrite" element={<Rewrite />}></Route>
        <Route path="/content/history" element={<ContentHistory />}></Route>
        <Route path="content-details/:id" element={<ContentDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
