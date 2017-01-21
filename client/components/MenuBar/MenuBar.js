import React,{Component} from "react";
import {Link} from "react-router";

class MenuBar extends Component{
    render(){

      const inlinecss={         
        active: {
          color: "#555555",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderBottomColor: "transparent",
          cursor: "default"
        }
      }
        return (
            
<nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>          
          <Link className="navbar-brand" to="/">React POC</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link  activeClassName="activelink" to="/home">Home</Link></li>
            <li><Link activeClassName="activelink" to="/login">Login</Link></li>
            <li><Link activeClassName="activelink" href="/register">Register</Link></li>           
          </ul>         
        </div> 
      </div>
    </nav>
          
        );        
        
    }
}

export default MenuBar;