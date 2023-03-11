import React from "react";
import { Stacknavigator } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import "./App.css"
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Stacknavigator />
      </Provider>
    </>
  );
}
