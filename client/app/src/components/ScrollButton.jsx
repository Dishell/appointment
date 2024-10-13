import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 20) {
            setVisible(true);
        } else if (scrolled <= 20) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="scroll">
            <FaArrowCircleUp size={50} color='green' onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }} />
        </div>
    );
};

export default ScrollButton;