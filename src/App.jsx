import React from "react";
import Layout from "./components/ui/Layout";
import BottomNavigation from "./components/layout/bot-nav/BottomNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <h1>sns</h1>
        <BottomNavigation />
      </Layout>
    </Provider>
  );
}

export default App;
