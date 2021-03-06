import React,{ useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isDuplicate, setIsDuplicate] = useState(false)

  const contacts = props.contacts
  const addContact = props.addContact

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   const newContact = {
     name: name,
     phone: phone,
     email: email
   }
  //  addContact(newContact)
  //  alert(JSON.stringify(newContact, null, ''))
   if(!isDuplicate){
     addContact(newContact)
    //  alert(JSON.stringify(newContact, '', 2))
     setName('')
     setPhone('')
     setEmail('')
   }else{
     alert('The contact name already exists')
     
   }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if(name){
      const value = contacts.find((contact) => {
        return contact.name === name
      })
      console.log("Valueeeee: ", value)
      if(value){
        setIsDuplicate((prev) => !prev)
      }else{
        setIsDuplicate(false)
      }
      console.log(isDuplicate)
    }
  }, [name, contacts, isDuplicate])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
