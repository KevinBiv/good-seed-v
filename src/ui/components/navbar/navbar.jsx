import React from "react";
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar-container">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>
                        <div className="phone-number">
                            0784567890
                        </div>
                    </li>
                    <li className="visible">
                        <a href="null" className="login-link">Log in</a>
                    
                    </li>
                    <li className="visible">
                        <button className="get-started-btn">Get Started</button>
                    </li>
                </ul>
                <GiHamburgerMenu className="hamburger-menu" />
                <div className="nav-authentication">
                    <a href="null" className="login-link">Log in</a>
                    <button className="get-started-btn">Get Started</button>
                </div>
            </div>
        )
    }
}

export default Navbar;