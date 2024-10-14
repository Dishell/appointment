import React from "react";

const Benefit = () => {
    return (
        <section className="section" id="benefit">
            <div className="container text-center">
                <p className="section-subtitle">Why Choose Us ?</p>
                <h6 className="section-title mb-6">Benefits</h6>
                <div className="pricing-wrapper">
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <img className="pricing-card-icon" src="/src/assets/imgs/service.svg" alt="Personalised Service" />
                        </div>
                        <div className="pricing-card-body">
                            <h6 className="pricing-card-title">Personalised Service</h6>
                            <div className="pricing-card-list">
                                <p>We tailor our services to meet your specific needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <img className="pricing-card-icon" src="/src/assets/imgs/market.svg" alt="Market Expertise" />
                        </div>
                        <div className="pricing-card-body">
                            <h6 className="pricing-card-title">Market Expertise</h6>
                            <div className="pricing-card-list">
                                <p>Our deep understanding of the property market ensures you're making informed decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <img className="pricing-card-icon" src="/src/assets/imgs/support.svg" alt="Comprehensive Support" />
                        </div>
                        <div className="pricing-card-body">
                            <h6 className="pricing-card-title">Comprehensive Support</h6>
                            <div className="pricing-card-list">
                                <p>From start to finish, we handle the details so you don't have to.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <p>Ready to make your next move? Let's start the journey together.</p>
            </div>
        </section>
    )
}

export default Benefit;