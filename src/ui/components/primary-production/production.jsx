import React from "react";
import './production.css';
import Maize from '../../resources/maize 1.png';
import Beans from '../../resources/beans 1.png';
import Cassava from '../../resources/cassava 1.png';
import Coffee from '../../resources/coffee 1.png';
import LeftChevron from '../../resources/Vector (4).png';
import RightChevron from '../../resources/Vector (5).png';


class Production extends React.Component {
    render() {
        return(
            <div className="production-container">
                <h2 className="production-title">OUR PRIMARY PRODUCTION</h2>
                <div className="products">
                    <img src={RightChevron} alt="" className="left-chevron" />
                    <img src={Maize} alt="" className="maize" />
                    <img src={Beans} alt="" className="beans" />
                    <img src={Cassava} alt="" className="cassava" />
                    <img src={Coffee} alt="" className="coffee" />
                    <img src={LeftChevron} alt="" className="right-chevron" />
                </div>
            </div>
        )
    }
}

export default Production;