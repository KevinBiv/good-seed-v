import React from "react";
import './about.css';
import aboutPicture from '../../resources/plants 1.png';


class About extends React.Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="about-picture-container">
                    <img src={aboutPicture} alt="" className="about-picture" />
                </div>
                <div className="about-description">
                    <h2 className="about-description-title">WHO WE ARE</h2>
                    <p className="about-description-text">
                        Good  Seed is here to help the society to end hunger,
                        achieve food security, improve nutrition and support
                        sustainable agriculture in Rwanda.
                        this is here to connect farmers and abatubuzi.
                        farmers are able to get every seed he/she need and
                        manage their farms by knowing the purcentage of
                        their crops. and umutubuzi is also able to promote his/her seed.                     
                    </p>
                    <button className="about-btn">Read More</button>
                </div>
            </div>
        )
    }
}

export default About;