import React from "react";
import './css/bootstrap.min.css';
import './css/style.css';

const Form = () => {
    return (
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="booking-bg" />
                            <form action="" method='POST'>
                                <div className="form-header">
                                    <h2>Book your appointment</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">First name</span>
                                        <input className="form-control" type="text" required="" />
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">Last name</span>
                                        <input className="form-control" type="text" required="" />
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">Email</span>
                                        <input className="form-control" type="email" required="" />
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <span className="form-label">Phone</span>
                                        <input className="form-control" type="tel" required="" />
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Subject</span>
                                    <input className="form-control" type="text" required="" />
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Details</span><br />
                                    <textarea className='form-area'></textarea>
                                </div>
                                <div className="form-btn">
                                    <button type="submit" className="submit-btn">Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;