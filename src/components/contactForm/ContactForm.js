import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" pattern="(0|\+233)([25])([03456])[ -]?(\d{3})[ -]?(\d{4})"/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="Submit" />
    </form>
  );
};
