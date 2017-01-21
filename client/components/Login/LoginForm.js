import React, {Component} from "react";
import classnames from "classnames";
import {browserHistory} from "react-router";
import InputText from "../Control/InputText";

export default class LoginForm extends Component {
    //below is valid option with additional babel tranpiler plugin
    // static propTypes = {
    //     userLoginRequest:React.PropTypes.func.isRequired
    // }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors:{},
            isLoading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        if(!!this.state.errors[e.target.name]){
            let errors=Object.assign({},this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]:e.target.value,
                errors
            });
        }else{
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let errors={};
        if(this.state.username==='') errors.username="Username is mandatory";
        if(this.state.password==='') errors.password="Password is mandatory";
        this.setState({errors});
        
        const isValid=Object.keys(errors).length===0;
        if(isValid){
        this.setState({errors:{},isLoading:true});
            this.props
                .userLoginRequest(this.state)
                .then(
                () => { 
                    //for successful login:redirect to home page using one for following:
                    //1:browserhistory as below
                    //browserHistory.push("/");

                    //2: using the react router contextTypes
                    this.context.router.push("/");
                },
                ({response}) => { 
                    this.setState({ errors:response.data.errors,isLoading:false });
                    }
                );
            }  
    }
    
    render() {
        const {errors}=this.state;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {!!this.state.errors.global && <div className="alert alert-danger" role="alert">{this.state.errors.global}</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="well">
                            <form className="form-horizontal" onSubmit={this.onSubmit}>
                            <InputText
                                field="username"
                                value={this.state.username}                               
                                label="Username"
                                error={errors.username}
                                type="text"                               
                                onChange={this.handleChange}  />

                                <div className={classnames("form-group",{'has-error':errors.username})}>
                                    <label className="control-label">Username </label>
                                    <input name="username"
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.handleChange}/>
                                        {errors.username 
                                            && <span className="help-block">{errors.username}</span>
                                        }
                                </div>
                                <div className={classnames("form-group",{'has-error':errors.password})}>
                                    <label className="control-label">Password </label>
                                    <input name="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.handleChange}/>
                                    {errors.password 
                                            && <span className="help-block">{errors.password}</span>
                                    }
                                </div>
                                <div className="form-group">
                                    <button disabled={this.state.isLoading} type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//Outside class is declared as shown below
LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}

LoginForm.contextTypes={
    router:React.PropTypes.object.isRequired
}