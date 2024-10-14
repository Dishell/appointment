import React from "react";

const Service = () => {
    return (
        <section className="section" id="service">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Services</h6>
                <p>Are you ready to find your dream home but feeling overwhelmed by the process? At Windsor Place, we specialize in making your property purchase journey as smooth and stress-free as possible. Here's how we can help:</p>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="/src/assets/imgs/property.svg" alt="Expert Property Sourcing" className="icon" />
                                <h6 className="title">Expert Property Sourcing</h6>
                                <p className="subtitle">We take the time to understand your needs and preferences, then scour the market to find properties that align with your vision. Our extensive network and local market knowledge mean we can access opportunities that others might miss.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="/src/assets/imgs/negotiation.svg" alt="Skilled Negotiation" className="icon" />
                                <h6 className="title">Skilled Negotiation</h6>
                                <p className="subtitle">Once we've found the right property, we'll handle the negotiations to ensure you get the best possible deal. Our experience in the market gives us the upper hand in securing favorable terms for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="/src/assets/imgs/conveyancers.svg" alt="Liaising with Conveyancers" className="icon" />
                                <h6 className="title">Liaising with Conveyancers</h6>
                                <p className="subtitle">Navigating the legal aspects of buying property can be complex. We work closely with conveyancers to ensure all legal matters are handled promptly and efficiently, so you can focus on planning your move.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src="/src/assets/imgs/banks.svg" alt="Coordinating with Banks" className="icon" />
                                <h6 className="title">Coordinating with Banks</h6>
                                <p className="subtitle">We liaise with banks and financial institutions on your behalf, making sure your financing is in place and that everything moves forward without a hitch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;