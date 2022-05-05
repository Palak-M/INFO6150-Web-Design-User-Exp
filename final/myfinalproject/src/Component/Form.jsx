import React, { useState } from 'react';
import '../Css/ContactStyle.css';

function Form() {
  let [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let [showUser, setShowUser] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((elements) => ({
      ...elements,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowUser(!showUser);
  };

  return (
    <>
      <h1>Contact us</h1>
      <form action="" id="contact" onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" placeholder="Enter your name" required value={contactData.name}
            onChange={handleChange}
          />

        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" placeholder="Enter your email address" required value={contactData.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <input name="message" type="text" id="message" placeholder="Enter your message" required value={contactData.message} onChange={handleChange} />
        </div>

        <div className="btnBox">
          <div className="btn">
            <button type="submit">Submit Details</button>
          </div>
        </div>

      </form >
      <div className={showUser ? "showDiv" : "hideDiv"}>
        <div>Name: {contactData.name}</div>
        <div>Email: {contactData.email}</div>
        <div>Message: {contactData.message}</div>
      </div>
    </>
  )
}

export default Form;