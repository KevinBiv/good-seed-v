import React from "react";
import './footer.css';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-description">
                    Facilisi eu euismod pretium iaculis nisl.
                    Aenean vitae nisi nibh imperdiet. Aliquam
                    ullamcorper dignissim lorem gravida aucto
                    r et augue sed facilisis.
                </div>
                <div className="footer-contact-us">
                    <h3>CONTACT US</h3>
                    <p>Email: goodseed65@gmail.com</p>
                    <p>Phone: 0781350105</p>
                    <p>Location: Kigali, KG133</p>
                </div>
                <div className="footer-services">
                    <h3>SERVICES</h3>
                    <p>Selling seeds from abatubuzi to farmers</p>
                    <p>Selling Chia Seeds Puddings</p>
                    <p>Upgrading seeds on the market</p>
                </div>
            </div>
        )
    }
}

export default Footer;