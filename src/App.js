import React from "react";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import store from "./store";
import "./style.scss";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
