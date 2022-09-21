import React from "react";
import './signupInput.css';


class SignUpInput extends React.Component {
    render() {
        return (
            <div className="input-component">
                <label htmlFor={this.props.forLabel} className="label">{this.props.label}</label>
                <input type={this.props.type} className="input" />
            </div>
        )
    }
}

export default SignUpInput;