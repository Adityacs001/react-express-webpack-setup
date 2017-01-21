import React from "react";
import {render} from "react-dom";
import css from '../static/css/style.styl';
import App from "./components/App";

import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore,applyMiddleware} from "redux";

import {Router,browserHistory } from "react-router";
import routes from "./components/Routes/routes";

const store =createStore(
(store={})=>store,
applyMiddleware(thunk)
);

render(   
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} >
                <App/>
            </Router>
        </Provider>
    ,
document.getElementById("app"));