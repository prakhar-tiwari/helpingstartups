import { API } from "aws-amplify";
import React from "react";
import { useState } from "react";
import axios from "axios";

function QueryForm({ handleToast, isScroll }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState();
  const [queryMessage, setQueryMessage] = useState("");
  // const mailApi =
  //   "https://us-central1-helping-startups.cloudfunctions.net/emailSender";
  const mailApi = "/hs/send-email";
  // const testMail = "http://localhost:5000/api/send-email";
  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("helpingstartups", mailApi, {
        body: {
          fullname: fullname,
          sender: email,
          contactNumber: contactNumber,
          queryMessage: queryMessage,
          subject: "Query Mail",
        },
      });
      // const response = await axios.post(testMail, {
      //   fullname: fullname,
      //   sender: email,
      //   contactNumber: contactNumber,
      //   queryMessage: queryMessage,
      //   subject: "Query Mail",
      // });
      if (response) {
        setFullname("");
        setEmail("");
        setContactNumber("");
        setQueryMessage("");
        handleToast(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form
      className={`landing-page-query__form ${
        isScroll ? "landing-page-query__form-scroll" : ""
      }`}
    >
      <div className="landing-page-query__form-fields">
        <input
          placeholder="Full Name"
          type="text"
          className="landing-page-query__form-field landing-page-query__form--fullname"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          placeholder="Email Address"
          type="email"
          className="landing-page-query__form-field landing-page-query__form--email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Contact Number"
          type="number"
          className="landing-page-query__form-field landing-page-query__form--contact"
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <textarea
          placeholder="Drop a message"
          type="text"
          className="landing-page-query__form-field landing-page-query__form--question"
          onChange={(e) => setQueryMessage(e.target.value)}
          value={queryMessage}
        ></textarea>
      </div>
      <button
        className="btn btn-primary landing-page-query__form-button"
        type="button"
        onClick={sendMail}
      >
        Submit
      </button>
    </form>
  );
}

export default QueryForm;
