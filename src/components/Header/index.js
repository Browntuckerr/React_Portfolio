import Navigation from "./Navigation";
import React, {Component} from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";

import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import AboutMe from "../AboutMe";

class Header extends Component{
    render(){
    return (
       <HashRouter>
           <Header>
               <Navigation />
           </Header>
           <div className="content">
               <Route exact path="/" render={()=> <Redirect to="/about" />} />
               <Route path="/about" component={AboutMe} />
               <Route path="/portfolio" component={Portfolio} />
               <Route path="/contact" componennt={ContactMe} />
            </div>
        </HashRouter>
    ); 
    } 
}
export default Header