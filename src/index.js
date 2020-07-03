import React from "react";
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from "./components/app";
import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));







