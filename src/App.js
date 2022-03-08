import "./css/App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { logout } from "./actions/auth";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Users from "./components/Users";
import Detail from "./components/Detail";
import { ProtectedRoute } from "./ProtectedRoute";
import "bootstrap";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <BrowserRouter>
      <div>
        <Nav currentUser={currentUser} logout={logOut} />
        <div className="p-2 d-flex justify-content-between">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={currentUser} />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<Users />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
