import React from 'react'
import './contact.css'

const Contact = ({contact}) => {
  return (
    <li className='contactitem'>
          <img src={contact.photo} alt="img" />
          <span className='t'>{contact.username}</span>
    </li>
  )
}

export default Contact