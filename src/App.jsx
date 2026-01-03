import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import { Flip, ToastContainer } from "react-toastify";
import GenerateImage from "./page/GenerateImage";
import Rewrite from "./page/Rewrite";
import ImageHistory from "./page/ImageHistory";
import ContentHistory from "./page/ContentHistory";
import ContentDetails from "./page/ContentDetails";
import Nav from "./component/Nav";
import Content from "./page/Content";
import Image from "./page/Image";
import { AuthProvider } from "./context/auth";
import ProtectedRoute from "./component/ProtectedRoute";

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
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<div>home</div>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route
            path="/image"
            element={
              <ProtectedRoute>
                <Image />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/image/generate"
            element={
              <ProtectedRoute>
                <GenerateImage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/image/history"
            element={
              <ProtectedRoute>
                <ImageHistory />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/content"
            element={
              <ProtectedRoute>
                <Content />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/content/rewrite"
            element={
              <ProtectedRoute>
                <Rewrite />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/content/history"
            element={
              <ProtectedRoute>
                <ContentHistory />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="content-details/:id"
            element={
              <ProtectedRoute>
                <ContentDetails />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
