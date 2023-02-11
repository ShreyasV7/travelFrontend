import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <>
      <div className="mail">
        <h1 className="mailTitle">Save Time, Save Money!</h1>
        <span className="mailDescription">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInput">
          <input placeholder="Enter your Email Id" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default MailList;
