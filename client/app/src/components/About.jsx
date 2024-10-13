import React from "react";

const About = () => {
    return (
        <section className="section" id="about">
            <div className="container text-center">
                <div className="about">
                    <div className="about-img-holder">
                        <img src="/src/assets/imgs/profile.jpg" className="about-img" alt="George Hianly" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p className="section-body text-justify"> With a passion for real estate and a solid foundation in finance, I bring a unique skill set to my role as a buyer advocate. Prior to dedicating myself fully to property, I worked as a financial adviser, helping individuals and families make informed decisions about their financial futures. My experience in financial planning taught me the importance of strategic investments, which seamlessly translates into the property market. <br /> <br /> I've always had a keen interest in real estate, not just for its potential as an investment but also for the role it plays in people's lives. Whether you're purchasing your first home, securing an investment property, or finding that perfect space to grow into, I'm here to guide and support you every step of the way. <br /> <br /> What drives me is helping people navigate the sometimes daunting process of buying property, with a focus on making it as seamless and stress-free as possible. I believe that the right property can transform lives, and I'm committed to helping you find the one that best suits your goals and aspirations. <br /> <br /> Let's work together to make your property dreams a reality!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;