import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts
  const onChange = props.onChange
  return (
    <select onChange={onChange}>
      <option>No contact</option>
      { contacts.map((contact) => {
        return <option value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
