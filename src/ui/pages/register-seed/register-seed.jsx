import React from "react";
import './register-seed.css';
import Navbar from "../../components/navbar/navbar";
import rightChevron from "../../resources/Vector (4).png";
import maize from "../../resources/maize 2.png";
// import SignUpInput from "../../components/signup/signup-input/signupInput";



function RegisterSeed() {
    return(
        <div className="register-seed-container">
            <div className="navbar-register-seed-component">
                <Navbar />
            </div>
            <div className="register-seed-wrapper">

                <div className="register-seed-left-wrapper">
                    <ul className="seeds-list">
                        <li><button>Maize</button></li>
                        <li><button>Beans</button></li>
                        <li><button>Coffee</button></li>
                        <li><button>Cassava</button></li>
                        <li><button>Yam</button></li>
                        <li><button><img src={rightChevron} alt="" /></button></li>
                    </ul>
                    <img src={maize} alt="" />
                </div>
                <div className="register-seed-right-wrapper">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                    <label htmlFor="">Code</label>
                    <input type="text" />
                    <label htmlFor="">Umutubuzi</label>
                    <input type="text" />
                    <label htmlFor="">Manufacturing Date</label>
                    <input type="text" />
                    <label htmlFor="">Expiry Date</label>
                    <input type="text" />
                    <button className="register-seed-btn">Register</button>
                </div>

            </div>
        </div>
    )
}

export default RegisterSeed;