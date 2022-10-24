import React, { useState } from 'react'
import Contact from '../contact/Contact'
import './rightbar.css'
import {Contacts} from '../../Data.js'

const Rightbar = () => {
  const [query,setquery] = useState("")

  return (
    <div className='rightbar'>
      <div className="heading">
        <span>Contacts</span>
        <input type="text" 
        onChange={(e) => setquery(e.target.value.toLowerCase())}
        className='contactinput' placeholder='Search Contacts' />
      </div>
      <ul className="contactlist">
        {Contacts.filter((contact) => contact.username.toLowerCase().includes(query)).map(contact => (
               <Contact key={contact.id} contact={contact} />
        ))}
     
      </ul>
    </div>
  )
}

export default Rightbar