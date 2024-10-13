import React, {useEffect, useState} from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const handleNavClick = (event) => {
        const target = event.target;
  
        if (target.hash) {
          event.preventDefault();
          const element = document.querySelector(target.hash);
  
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
  
            // Update the URL hash
            window.history.pushState(null, null, target.hash);
          }
        }
      };
  
      const navLinks = document.querySelectorAll(".navbar .nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", handleNavClick);
      });
  
      // Cleanup event listeners on unmount
      return () => {
        navLinks.forEach((link) => {
          link.removeEventListener("click", handleNavClick);
        });
      };
    }, []);
  
    const handleToggle = () => {
        setIsActive(!isActive); // Toggle the active state
    };
    
    return (
        <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
            <div className="container">
                <a className="logo" href="#">
                    <img src="/src/assets/imgs/logo.svg" className="navbar-img" alt="Windsor Place" />
                </a>
                <ul className={`nav ${isActive ? 'show' : ''} nav-link`}>
                    <li className="item">
                        <a className="link" href="#home"> Home </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#about"> About </a>
                    </li>                    
                    <li className="item">
                        <a className="link" href="#testimonial"> Testimonial </a>
                    </li>                    
                    <li className="item">
                        <a className="link" href="#contact"> Contact </a>
                    </li>
                </ul>
                <a id="nav-toggle" className={`nav-toggle ${isActive ? 'is-active' : ''} hamburger hamburger--elastic`} onClick={handleToggle}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner" />
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;