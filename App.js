import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router";

export default function () {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
