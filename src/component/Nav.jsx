import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Nav() {
  const navigate = useNavigate();
  const { isAuthenticated, name: userName, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div>@</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Generator CMS
            </h1>
          </Link>

          {isAuthenticated && (
            <div className="flex items-center gap-2">
              <Link
                className="text-sm font-medium text-gray-600 hover:text-indigo-600"
                to="/content"
              >
                Content
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 hover:text-indigo-600"
                to="/image"
              >
                Image
              </Link>
            </div>
          )}
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm">
                      {userName?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-600">{userName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="cursor-pointer px-4 py-2 rounded-lg font-semibold text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="px-4 py-2 rounded-lg text-sm font-medium  bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90"
                  to="/register"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
