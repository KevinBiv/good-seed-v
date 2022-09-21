import React from "react";
import './mission.css';
import missionPicture from '../../resources/image 2.png';


class Mission extends React.Component {
    render() {
        return (
            <div className="mission">
                <div className="mission-description">
                    <h2 className="mission-description-title">OUR MISSION</h2>
                    <p className="mission-description-text">
                        consectetur adipiscing elit. Odio suspendisse
                        aliquam augue et odio nulla arcu feugiat.
                        Phasellus tortor, massa mi nisl facilisis nisl hac 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi dolorem ab blanditiis, veniam ratione corporis laudantium culpa unde rerum, vero quae vel amet quibusdam veritatis porro explicabo qui maiores nulla!
                    </p>
                    {/* <button className="mission-btn">Read More</button> */}
                </div>
                <div className="mission-picture-container">
                    <img src={missionPicture} alt="" className="mission-picture" />
                </div>
            </div>
        )
    }
}

export default Mission;