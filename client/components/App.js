import React from "react";
import Message from "./Message";
 
import LoginContainer from "./Login/LoginContainer";
import MenuBar from "./MenuBar/MenuBar";

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <MenuBar/>                 
               {this.props.children}
            </div>
        );
    }
}
