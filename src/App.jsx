import React from "react";
import Layout from "./components/ui/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

import ApiTest from "./redux/ApiTest";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <h1>sns</h1>
      </Layout>
    </Provider>
  );
}

export default App;
