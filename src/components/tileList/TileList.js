import React from "react";
import {Tile} from '../../components/tile/Tile'

export const TileList = (props) => {
  const contacts = props.contacts
  const appointments = props.appointments

  if(contacts){
    return (
      <div>
        {
          contacts.map((contact, index) => {
            return <Tile key={index} contact={contact} />
          })
        }
      </div>
    );
  }else if(appointments){
    return (
      <div>
        {
          appointments.map((appointment, index) => {
            return <Tile key={index} appointment={appointment} />
          })
        }
      </div>
    )
  }
  
};
