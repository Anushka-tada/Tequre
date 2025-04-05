import React from "react";

function ContactSection() {
  return (
    <div className="containerr mt-5 pt-4 px-0 mx-0">
      <div className="pageHeading ">
        <h2 >Contact Us</h2>
        
      </div>
      <div className="row m-0 p-0  contactLeftDiv1 d-flex justify-content-center align-items-center">
        
        <div className="col-md-7 col-12  px-sm-5 px-1 touch-form" >
          <div className="p-lg-4 p-2 m-2" >
            <h4 className='get-touch'>Get In Touch</h4>
            <form className="row g-3 my-auto">
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Your Name
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                 Your Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your mail" />
              </div>
              
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="subject"
                />
              </div>
              
              <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="write your message here"
                  style={{height:"200px"}}
                />
              </div>
              
              <div className="col-12 justify-content-center d-flex">
                <button type="submit" className="send-message">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5 col-12  p-0  d-flex justify-content-center  ">
           <img src="/assets/contact-img.png" className="contact-img"></img>
        </div>
      </div>

      <div className="row m-0 p-0 my-5 contactLeftDiv">
      <div className="col-lg-4 col-12 order-2 order-lg-1 m-0   p-0">
          <div className="p-sm-4 p-1 m-2 mt-5">
            <div className="d-flex align-items-centr ">
              
              <div className="ms-3">
                <h5 className="mb-0 ">Address</h5>
                <p className="mb-0 contact-p">4650 Brentwood Blvd 1705, Burnaby BC V5C 0M3, Canada</p>
              </div>
            </div>
            <div className="d-flex align-items-centr my-sm-5 my-2">

              <div className="ms-3">
                <h5 className="mb-0">Call Us</h5>
                <p className="mb-0  contact-p">+1 ‪(650) 489-2550‬</p>
              </div>
            </div>
            <div className="d-flex align-items-centr ">
             
              <div className="ms-3">
                <h5 className="mb-0">Email Us</h5>
                <p className="mb-0  contact-p">contact@tequre.com</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="col-lg-8 col-12 order-2 order-lg-1 m-0 my-auto  p-0">
        <div className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.2354758400895!2d88.40076123612282!3d22.587793268138633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276754e7c9489%3A0x66ada39be5c2da58!2sCA-191%2C%20CA%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700136!5e0!3m2!1sen!2sin!4v1667212481498!5m2!1sen!2sin"
                width="100%"
                height={"420px"}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
