import React from "react";
import './styles.css';


class BackgroundPicture extends React.Component {
    render() {
        return (
            <>
                <div className="background-img">
                    <section className="background-picture-text">
                        <h1>
                            GOOD SEED.
                            ALL NATURAL PRODUCTS
                        </h1>
                        <button className="call-to-action">ORDER NOW</button>
                    </section>
                </div>
            </>
        )
    }
}

export default BackgroundPicture;