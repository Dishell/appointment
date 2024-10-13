import React from "react";

const Footer = () => {
    const today = new Date();
    
    return (
        <div className="container">
            <footer className="footer">
                <p className="mb-0"> Copyright {today.getFullYear()} © </p>
                {/* <div className="social-links text-right m-auto ml-sm-auto">
                    <a href="javascript:void(0)" className="link">
                    <i className="ti-facebook" />
                    </a>
                    <a href="javascript:void(0)" className="link">
                    <i className="ti-twitter-alt" />
                    </a>
                    <a href="javascript:void(0)" className="link">
                    <i className="ti-google" />
                    </a>
                    <a href="javascript:void(0)" className="link">
                    <i className="ti-pinterest-alt" />
                    </a>
                    <a href="javascript:void(0)" className="link">
                    <i className="ti-instagram" />
                    </a>
                    <a href="javascript:void(0)" className="link">
                    <i className="ti-rss" />
                    </a>
                </div> */}
            </footer>
        </div>
    )
}

export default Footer;