import React from "react";

export const Tile = (props) => {
  const contact = props.contact
  const appointment = props.appointment
  if(contact){
    return (
      <div className="tile-container">
        <p className="tile-title">{contact.name}</p>
        <p className="tile">{contact.phone}</p>
        <p className="tile">{contact.email}</p>
      </div>
    );
  }else{
    return (
      <div className="tile-container">
        <p className="tile-title">{appointment.title}</p>
        <p className="tile">{appointment.contact}</p>
        <p className="tile">{appointment.date}</p>
        <p className="tile">{appointment.time}</p>
      </div>
    );
  }
  
};
