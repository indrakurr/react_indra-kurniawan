import React, { useState } from "react";
import { forwardRef } from "react";

function ContactUs(props, ref) {
  // Membuat state untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    helpYou: "",
  });

  // Mengubah state saat input berubah
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Menangani klik tombol "Submit"
  const handleSubmit = () => {
    // Membuat pesan untuk ditampilkan dalam alert
    const message =
      "First Name: " +
      formData.firstName +
      "\n" +
      "Last Name: " +
      formData.lastName +
      "\n" +
      "Email: " +
      formData.email +
      "\n" +
      "What can we help you with: " +
      formData.helpYou;

    // Menampilkan pesan dalam alert
    alert(message);
  };

  return (
    <section className="contact-section" ref={ref}>
      <div class="container pt-5 pb-5" id="ContactUs">
        <div className="row">
          <div className="contact-us col-md-6 text-center text-md-start">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="mt-3">
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the <a href="/#">department email </a>you'd like
              to contact below
            </p>
          </div>

          <div className="col-12 col-md-4 text-center text-md-start mt-3 mt-md-0">
            <form action="#">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12">
                  <label htmlFor="helpYou">What can we help you with?</label>
                  <br />
                  <textarea
                    className="form-control"
                    id="helpYou"
                    name="helpYou"
                    style={{ height: 100 }}
                    defaultValue={formData.helpYou}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary mt-3"
                id="submitButton"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(ContactUs);
