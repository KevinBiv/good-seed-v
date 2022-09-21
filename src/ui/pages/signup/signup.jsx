import React from "react";
import Navbar from "../../components/navbar/navbar";
import SignUpInput from "../../components/signup/signup-input/signupInput";
import './signup.css';
import SignUpBackground from "../../resources/Group 65.png";


class SignUp extends React.Component {
    render() {
        return (
            <div className="signup-container">
                <div className="navbar-signup-component">
                    <Navbar />
                </div>
                <div className="signup-bgImg-container">
                    <img src={SignUpBackground} alt="" className="signup-background-img" />
                </div>
                <form action="" className="form">
                    <div className="signup-input-component-container">
                        <SignUpInput forLabel="username-email" label="Username or Email" type="text" className="" />
                        <SignUpInput forLabel="full-names" label="Full Name" type="text" />
                        <SignUpInput forLabel="full-names" label="Location" type="text" />
                        <SignUpInput forLabel="full-names" label="Status" type="text" />
                        <SignUpInput forLabel="full-names" label="Phone Number" type="text" />
                        <SignUpInput forLabel="full-names" label="TIN Number" type="text" />
                        <SignUpInput forLabel="full-names" label="NID" type="text" />
                        <SignUpInput forLabel="full-names" label="Password" type="text" />
                        <SignUpInput forLabel="full-names" label="Confirm Password" type="text" />
                        <button className="signup-btn">SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;