import React from "react";
import '../css/Contact.css';
import { FaMapPin, FaPhoneAlt, FaRegClock, } from "react-icons/fa";


const Contact = () => {

  return (
    <>
      <h2 className="common-heading"> CONTACT US</h2>
      <div className='h4'>
        <h4>Let’s have a discussion now.</h4>
      </div>
      <div className="contact-3">
        <p>Feel free to contact us or just drop a line here.<br></br>
          Our career counsellor will reach you soon</p>
      </div><br></br>

      <div className="contact-4">
        <h4>our working hours:</h4>
        <FaRegClock />9 AM – 7:30 PM (Monday – Saturday)
      </div><br></br><br></br>

      <div className="card-5">
        <FaMapPin className="contact-icon" /><br></br>
        <h2><b>HEAD OFFICE ADDRESS</b></h2>
        <p>Plot no 8, Vishvakarma Society, Opposite<br></br> Aundh Sanjivani Medical, 4th floor,<br></br>
          Landmark: Chemistry Lab Institute<br></br>
          Aundh, pune-411007</p><br></br>
        <div>

        </div>
        <FaPhoneAlt />
        <h2><b>PHONE NUMBER</b></h2>
        <a href="tel:+ 7774537859">Call: +91 7774537859</a><br></br>
        <a href="tel:+ +91 876-234-6896">Call: +91 876-234-6896</a>
      </div>
      <br></br>




      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.44733137564!2d73.7970387969186!3d18.55771906277412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf483a6041cd%3A0xd968e07ed9df3a2d!2sAundh%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702027594532!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="contact">
        <div className="contact-form">
          <form method="POST"
            action="https://formspree.io/f/xoqogwpz"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              required
            /><br></br>

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            /><br></br>

            <input
              type="text"
              name="mobilenumber"
              placeholder="Mobile no"
              autoComplete='off'
              required

            /><br></br>

            <textarea
              name="Message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea><br></br>

            <input className='btn btn-info' type="submit" value="SUBMIT YOUR MESSAGE" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;


