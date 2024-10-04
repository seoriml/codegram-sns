import React, { useEffect, useState } from "react";
import Layout from "./components/ui/Layout";
import BottomTab from "./components/layout/bot-nav/BottomNavigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home/Home";
import PostCreate from "./pages/post/PostCreatePage";
import Profile from "./pages/profile/MyProfile";
import LoginMain from "./pages/login/LoginMain";
import useAPI from "./hooks/useAPI";
import { setCredentials } from "./redux/apiSlice";
import LoginEmail from "./pages/login/LoginEmail";
import Signup from "./pages/signup/Signup";
import PostDetailPage from "./pages/post/PostDetailPage";
import PostEditPage from "./pages/post/PostEditPage";
import RedirectIfAuthenticated from "./components/auth/RedirectIfAuthenticated";
import ProfileSetup from "./pages/profile/ProfileSetup";
import Search from "./pages/search/SearchPage";

function App() {
  const { isLoggedIn } = useAPI();
  const dispatch = useDispatch();

  useEffect(() => {
    // localStorage.removeItem("userToken");
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(setCredentials({ token }));
    }
  }, []);

  return (
    <Layout>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RedirectIfAuthenticated>
                <LoginMain />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectIfAuthenticated>
                <LoginEmail />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectIfAuthenticated>
                <Signup />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/profile/setup"
            element={
              <RedirectIfAuthenticated>
                <ProfileSetup />
              </RedirectIfAuthenticated>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<PostDetailPage />} />
          <Route path="/edit/:id" element={<PostEditPage />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/post" element={<PostCreate />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {isLoggedIn && <BottomTab />}
      </Router>
    </Layout>
  );
}

export default App;
