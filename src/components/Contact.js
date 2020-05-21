import React from "react";
import gmail from "./../images/mail.svg";

const Contact = () => {
  return (
    <div>
      <h1 className="flex justify-center p-12 border-b ">Contact Us</h1>
      <div className="flex justify-center pl-12 pr-12 mt-20">
        <div className="w-16">
          <img src={gmail} alt="" />
        </div>
      </div>
      <div className="flex justify-center font-bold font-medium mt-4">
        <h2>Email us at </h2>
      </div>
      <div className="flex justify-center  font-medium mb-10">
        <h2> renoveering.shop@gmail.com</h2>
      </div>
    </div>
  );
};

export default Contact;
