import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import UserReducer from "./redux/userReducer";

let myStore = createStore(UserReducer);

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>
    , document.getElementById("root"));