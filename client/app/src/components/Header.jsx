import React from "react";

const Header = () => {
    return (
        <header id="home" className="header">
            <div className="overlay" />
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am George Hianly, Buyer's Advocate</span>
                </h1>
                <p className="header-subtitle">Powered by Leverage Listing</p>
                <button className="btn btn-outline-primary rounded"><a className="link" href="#contact">Book an Appointment with me</a></button>
            </div>
        </header>
    )
}

export default Header;