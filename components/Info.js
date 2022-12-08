import React from "react";

function Info() {
    return (
        <div className="info--container">
            <div className="info-logo-container">
                <img 
                className="info-logo" src="https://images.immediate.co.uk/production/volatile/sites/30/2017/01/avocado-45bccf2-scaled.jpg">
                </img>
            </div>
            <h1>Persea americana</h1>
            <h3>Avocado Benefits</h3>
            <h4>avocado.notreal.website</h4>
            <div className="bttn-container">
                <button className="bttn-email">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>
                <button className="bttn-linkedin">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    )
}

export default Info;