import React from "react";

const ContactSection = () => {
  return (
    <div>
      {/* CONTACT SECTION */}
      <section
        className="contact container shadow my-lg-5 rounded-3"
        id="contact"
      >
        {/* heading */}
        <div className="heading">
          <h2>Contact</h2>
          <span>Contact Me</span>
        </div>

        {/* content */}
        <div className="contact-form" id="contact-form">
          <form action="#">
            <input type="text" placeholder="Enter Your Name" required />
            <input
              type="email"
              placeholder="EX... vallarasuk143@gmail.com"
              required
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write Message here....."
            ></textarea>
            <button type="submit" className="btn btn-primary mx-lg-5">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
