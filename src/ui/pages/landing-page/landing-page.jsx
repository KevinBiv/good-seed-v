import React from "react";
import './landing-page.css';
import BackgroundPicture from "../../components/background-picture";
import Navbar from "../../components/navbar/navbar";
import Services from "../../components/services/services";
import About from "../../components/about/about";
import Production from "../../components/primary-production/production";
import Mission from "../../components/mission/mission";
import Vision from "../../components/vision/vision";
import Footer from "../../components/footer/footer";


class LandingPage extends React.Component {
    render() {
        return(
            <div className="landing-page">
                <BackgroundPicture />
                <Navbar />
                <div className="wrapper">
                    <Services />
                    <About />
                    <Production />
                    <Mission />
                    <Vision />
                </div>
                <Footer />
            </div>
        )
    }
}

export default LandingPage;