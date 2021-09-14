import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";


import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {name: 'Solomon Asiedu',
     phone: '0548343443',
     email: 'solo@gmail.com'
    },
    {name: 'Atobra Joseph',
     phone: '0453837343',
     email: 'atobra@gmail.com'
    }
  ])
  const [appointments, setAppointments] = useState([
    {title: 'Training progress',
     contact: 'first contact',
     date: new Date(),
     time: '2:30pm'
    },
    {title: 'Codesignal progress',
     contact: 'second contact',
     date: new Date(),
     time: '5:30pm'
    }
  ])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (newContact) => {
    
    setContacts((prev) => {
      return [...prev, newContact]
    })
  }

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
    setAppointments((prev) => {
      return [...prev, newAppointment]
    })
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
