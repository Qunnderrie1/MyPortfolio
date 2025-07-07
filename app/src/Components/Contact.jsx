import React, { useState } from "react";
import axios from "axios";
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [hasTriggered, setHasTriggered] = useState(false);
  //   Declare variables to get the user infomation
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userSubject, setUserSubject] = useState("");

  const [confirmMessage, setConfirmMessage] = useState("Send Message");

  const handleContactView = (inView) => {
    if (inView) {
      setHasTriggered(true);
    }
  };

  //   Contact Form Function
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleMessage = () => {
    if (userName && userEmail && userMessage) {
      axios
        .post(
          "https://myportfolio-1-ssqe.onrender.com",
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
    setUserEmail("");
    setUserName("");
    setUserSubject("");
    setUserMessage("");

    setTimeout(() => {
      setConfirmMessage("Send Message");
    }, 3000);

    console.log("Sending Message.......");
  };
  return (
    <div id="contact" className=" mt-20 h-fit w-[400px] mx-auto ">

      <InView
        onChange={(inView) => handleContactView(inView)}
        triggerOnce={true}
      >
        <div
          className={`${hasTriggered ? "animate-[moveContactBox_1s]" : "animate-none"
            }`}
        >
          <h1 className="text-white text-center text-[30px] font-normal">
            <span className="text-purple-500">Contact</span>Me
          </h1>
          <p className="text-white text-center font-light">
            Fill out the form below
          </p>
          <form
            action="POST"
            onSubmit={handleSubmit}
            className=" flex flex-col gap-4 max-w-full justify-center mx-auto mt-[40px] "
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
            <button
              onClick={handleMessage}
              className=" w-100 bg-purple-500 h-[40px] font-normal text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} /> {confirmMessage}
            </button>
          </form>
        </div>
      </InView>
    </div>
  );
};

export default Contact;
