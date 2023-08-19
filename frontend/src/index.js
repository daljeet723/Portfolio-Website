import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux"
import store from "./Store";
import {Provider as AlertProvider, positions, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//using AlertProvier so that alert messages can be used in project
const options ={
    positions: positions.BOTTOM_CENTER,
    timeout :5000,
    transitions:transitions.SCALE
}
ReactDom.render(
    <Provider store={store}>
    <AlertProvider template={AlertTemplate}{...options}>
        <App/>
    </AlertProvider>
        
    </Provider>,
    document.getElementById("root"));