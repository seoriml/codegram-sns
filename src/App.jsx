import React, { useEffect, useState } from "react";
import Layout from "./components/ui/Layout";
import BottomTab from "./components/layout/bot-nav/BottomNavigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home/Home";
import PostCreatePage from "./pages/post/PostCreatePage";
import Profile from "./pages/profile/MyProfile";
import YourProfile from "./pages/profile/YourProfile";
import MyProfile from "./pages/profile/MyProfile";
import Followers from "./pages/followersFollowings/followers";
import Followings from "./pages/followersFollowings/followings";
import ProfileEditPage from "./pages/profile/ProfileEdit";
import LoginMain from "./pages/login/LoginMain";
import useAPI from "./hooks/useAPI";
import { setCredentials } from "./redux/apiSlice";
import LoginEmail from "./pages/login/LoginEmail";
import Signup from "./pages/signup/Signup";
import PostDetailPage from "./pages/post/PostDetailPage";
import PostEditPage from "./pages/post/PostEditPage";
import RedirectIfAuthenticated from "./components/auth/RedirectIfAuthenticated";
import ProfileSetup from "./pages/profile/ProfileSetup";
import SearchPage from "./pages/search/SearchPage";
import ChatRoomPage from "./pages/chat/ChatRoomPage";
import NotFound from "./pages/error/NotFound";
import ProductCreatePage from "./pages/product/ProductCreatePage";
import ProductEditPage from "./pages/product/ProductEditPage";
import ScrollToTop from "./components/ui/ScrollToTop";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import ProductListPage from "./pages/product/ProductListPage";

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
        <ScrollToTop />
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
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail/:id" element={<PostDetailPage />} />
          <Route path="/edit/:id" element={<PostEditPage />} />
          <Route path="/chat" element={<ChatRoomPage />} />
          <Route path="/post/create" element={<PostCreatePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/profile/:accountname" element={<YourProfile />} />
          <Route path="/profile/:accountname" element={<MyProfile />} />
          <Route
            path="/profile/:accountname/followers"
            element={<Followers />}
          />
          <Route
            path="/profile/:accountname/followings"
            element={<Followings />}
          />
          <Route path="/product/create" element={<ProductCreatePage />} />
          <Route path="/product/edit/:id" element={<ProductEditPage />} />
          <Route path="/product/detail/:id" element={<ProductDetailPage />} />
          <Route path="/product/:accountname" element={<ProductListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isLoggedIn && <BottomTab />}
      </Router>
    </Layout>
  );
}

export default App;
