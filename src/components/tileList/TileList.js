import React from "react";
import {Tile} from '../../components/tile/Tile'

export const TileList = (props) => {
  const contacts = props.contacts
  return (
    <div>
      {
        contacts.map((contact, index) => {
          return <Tile key={index} contact={contact} />
        })
      }
    </div>
  );
};
