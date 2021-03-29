import React from "react";
import "../Contact.css";

const name = "Damdam";
const avatar =
  "https://cdn.pixabay.com/photo/2017/02/01/09/55/boy-2029277_960_720.png";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img src={avatar} className="avatar" alt="bearedMan" />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;