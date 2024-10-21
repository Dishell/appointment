import React, {useState} from "react";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [clients, setClients] = useState([]);
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [detail, setDetail] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const availableDate = tomorrow.toISOString().split('T')[0];

    const addClient = async () => {
      const clientData = {
        firstName,
        lastName,
        email,
        phone,
        detail,
        appointmentDate,
        isActive: true,
        createdAt: today.setTime(),
      }; // javascript object
  
      try {
        const response = await fetch("http://windsorpl.com.au:8000/api/clients/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientData),
        });
  
        const data = await response.json();

        for (let field in data) {
          if (data.hasOwnProperty(field)) {
            if (data.hasOwnProperty('result')) {
              if (data.result.includes('Error')) {
                toast.error(data.result);
              } else {
                toast.success(data.result);
              }
            } else {
              toast.error(`${field}: ${data[field][0]}`);
            }
          }
        }
        
      } catch (err) {
        toast.error(err);
      }
    };

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <div className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input type="text" size={25} maxLength={25} className="form-control" placeholder="First Name" required="" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="text" size={25} maxLength={25} className="form-control" placeholder="Last Name" required="" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="email" size={25} maxLength={25} className="form-control" placeholder="Enter Email" required="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="tel" size={10} maxLength={10} className="form-control" placeholder="Enter Phone" required="" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="date" className="form-control" required="" min={availableDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea rows={6} maxLength={250} className="form-control" placeholder="Any Details" onChange={(e) => setDetail(e.target.value)} />
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <button type="submit" className="btn btn-outline-primary rounded" onClick={addClient}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} theme="light" transition={Slide} />
        </section>
    )
}

export default Contact;