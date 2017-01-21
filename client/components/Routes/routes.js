import React from "react";
import {Route,IndexRoute} from "react-router";

import App from "../App";
import Message from "../Message";
import LoginContainer from "../Login/LoginContainer";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Message}/>
        <Route path="home" component={Message}/>
        <Route path="login" component={LoginContainer}/>
    </Route>
);