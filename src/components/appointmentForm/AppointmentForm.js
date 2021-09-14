import React from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Date" min={getTodayString}/>
      <input type="time" value={time} onChange={e => setTime(e.target.value)} placeholder="Time" />
      <ContactPicker contacts={contacts} onChange={e => setContact(e.target.value)}/>
      <input type="Submit" />
    </form>
  );
};
