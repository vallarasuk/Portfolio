import React, { useState } from "react";
import Title from "./lib/Title";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="container my-lg-5" id="contact">
      <div className="row">
        <div className="col-12">
          <Title text={"Contact"} />
          <div className="contact-form justify-content-evenly d-flex mt-5">
            <form
              onSubmit={handleSubmit}
              className="shadow rounded-4 p-md-5 p-2 "
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3 p-2"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-3 p-2"
                  placeholder="sample@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control mb-3 p-2"
                  placeholder="Write Message here....."
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="w-100 text-uppercase fw-bold btn btn-primary"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
