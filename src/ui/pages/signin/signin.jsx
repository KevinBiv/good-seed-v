import React from "react";
import Navbar from "../../components/navbar/navbar";
import './signin.css';
import SignInImg from '../../resources/signin-img.png';
// import SignUpInput from "../../components/signup/signup-input/signupInput";
import { Link } from 'react-router-dom';

function SignIn() {
    return(
        <div className="signin-container">
            
            <div className="navbar-signin-component">
                <Navbar />
            </div>
            
            <div className="signin-wrapper">
                <div className="left-wrapper">
                    <img src={SignInImg} alt="" className="signin-img" />
                    <div className="left-wrapper-text">
                        <h1 className="left-wrapper-title">GOOD SEED</h1>
                        <p className="left-wrapper-description">
                            sit amet, consectetur adipiscing elit. Ut lectus 
                            aliquam consectetur non. Sed volutpat amet, amet 
                            arcu, elit.
                        </p>
                    </div>
                </div>
                <div className="right-wrapper">
                    <h3 className="right-wrapper-title">SIGN IN</h3>
                    <form action="" className="signin-form">
                        <label htmlFor="">Username or Email</label>
                        <input type="text" className="signin-input" />
                        <div className="password-wrapper">
                            <label htmlFor="">Password</label>
                            <input type="password" className="signin-input" />
                            <a href="null">Forgot password?</a>
                        </div>
                        <button className="login-btn">LOG IN</button>
                        <p className="alternative">or don't have an account <Link to="/signup" className="signup-alternative">signup</Link></p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignIn;