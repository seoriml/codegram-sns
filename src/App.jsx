import React, { useEffect, useState } from "react";
import Layout from "./components/ui/Layout";
import BottomTab from "./components/layout/bot-nav/BottomNavigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/MyProfile";
import LoginMain from "./pages/login/LoginMain";
import useAPI from "./hooks/useAPI";
import { setCredentials } from "./redux/apiSlice";
import LoginEmail from "./pages/login/LoginEmail";
import Signup from "./pages/signup/Signup";

function App() {
  const { isLoggedIn } = useAPI();
  // console.log(isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("userToken");
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(setCredentials({ token }));
    }
  }, []);

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<LoginMain />} />
          <Route path="/login" element={<LoginEmail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {isLoggedIn && <BottomTab />}
      </Router>
    </Layout>
  );
}

export default App;
