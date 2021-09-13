import React from "react"
import { Navbar } from "react-bootsrap/Navbar";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" bg="primary" sticky="top">
                <NavLink className="nav-link" to="/">
                <div class="text-light">
                    <h3 class="nav-title-font">Tucker Brown</h3>
                </div>
                </NavLink>
                <ul class="navbar-nav ml-auto navitem-indent">
                    <li class="nav-item">
                        <NavLink to="/AboutMe">
                        <div class="nav-font text-light">About Me</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/Portfolio">
                        <div class="nav-font text-light">Portfolio</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/ContactMe">
                        <div class="nav-font text-light">Contact Me</div>
                        </NavLink>
                    </li>
                </ul>
            </Navbar>
        </div>






        // <nav>
        //     <ul>
        //     <li>
        //         <a href ="/">About Me</a></li>
        //     <li><a href ="/portfolio"> Portfolio</a></li>
        //     <li><a>Contact Me</a></li>
        //     <li><a> Resume </a> </li>
        //     </ul>
        // </nav>
    );
}
export default Navigation