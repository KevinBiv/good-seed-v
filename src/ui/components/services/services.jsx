import React from 'react';
import './services.css';
// import Line from '../../resources/Line 1.png';


class Services extends React.Component {
    render() {
        return(
            <>
                <div className='services'>
                    <p>AGRICULTURE</p>
                    <p>BUSINESS ADVISORY</p>
                    <p>CONSULTANCY</p>
                    <p>PROCESSING</p>
                </div>
                <div className="services-line-container">
                    <hr className='services-line' />
                </div>
            </>
        )
    }
}

export default Services;