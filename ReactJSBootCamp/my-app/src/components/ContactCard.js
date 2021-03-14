import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img
        src={props.contact.image}
        alt="Person Standing"
        height="400"
        width="400"
      />
      <h3>{props.contact.name}</h3>
      <p>{props.contact.contact}</p>
      <p>{props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
