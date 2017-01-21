import React,{Component} from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {userLoginRequest} from "../actions/userLoginRequest";

class LoginContainer extends Component{
    render(){
        const {userLoginRequest}=this.props;
        return(
            <LoginForm userLoginRequest={userLoginRequest}/>
        );
    }
}
LoginContainer.propTypes={
    userLoginRequest:React.PropTypes.func.isRequired
}
export default connect(null,{userLoginRequest})(LoginContainer);