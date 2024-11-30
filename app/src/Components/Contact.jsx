import React, { useEffect, useState } from "react";
import Divider from "./Divider";
import axios from "axios";

const Contact = () => {
  //   Declare variables to get the user infomation
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userSubject, setUserSubject] = useState("");

  const [confirmMessage, setConfirmMessage] = useState("Send Message");

  //   Contact Form Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && userEmail && userMessage) {
      axios
        .post(
          "https://myportfolio-tbi2.onrender.com/",
          {
            name: userName,
            email: userEmail,
            message: userMessage,
            subject: userSubject,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.error("Data not sent!", err));
    } else {
      alert("Please enter in all inputs!");
    }

    setConfirmMessage("Your Message Been Sent!");
  };
  return (
    <div id="contact" className=" mt-20 h-fit mx-auto ">
      <Divider />
      <h1 className="text-white text-center text-3xl font-bold ">
        Let's Chat!
      </h1>
      <div className="w-[150px] h-0.5 flex justify-center m-auto bg-[#f2fb00]"></div>
      <form
        action="POST"
        onSubmit={handleSubmit}
        className=" flex flex-col gap-4 max-w-[400px] justify-center mx-auto mt-[40px] "
      >
        <div className="flex flex-col form-control">
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col form-control">
          <input
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            placeholder="Email Address"
          />
        </div>
        <div className="flex flex-col form-control">
          <input
            type="text"
            onChange={(e) => setUserSubject(e.target.value)}
            value={userSubject}
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col form-control">
          <textarea
            maxLength="100"
            onChange={(e) => setUserMessage(e.target.value)}
            value={userMessage}
            className="resize-none h-60 form-control"
            placeholder="Enter your messager here..."
          />
        </div>
        <button className=" w-100 bg-[#f2fb00] h-[40px] font-bold">
          {confirmMessage}
        </button>
      </form>
    </div>
  );
};

export default Contact;
