import React from "react";
import Layout from "./components/ui/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import BottomTab from "./components/layout/bot-nav/BottomNavigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/MyProfile";
import PostDetailPage from "./pages/post/PostDetailPage";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <h1>sns</h1>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/details/:id" element={<PostDetailPage />} />
            {/* <Route path="/chat" element={<Chat />} /> */}
            <Route path="/post" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <BottomTab />
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
