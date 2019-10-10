import React from 'react'
import Contact from './Contact'


const contact = [

    {
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        name: 'Vanessa Ross' ,
        online: true ,
    },
    {
        avatar : "https://randomuser.me/api/portraits/women/4.jpg",
        name : "Eva Fields",
        online : false
    },
    {
        avatar : "https://randomuser.me/api/portraits/women/24.jpg",
        name : "Heat Silva",
        online : true
    },
    {
        avatar : "https://randomuser.me/api/portraits/men/79.jpg",
        name : "Eric Peck",
        online : true
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/95.jpg',
        name:'Neil Mendoza' ,
        online:false ,
    }
]


const ContactList = () => (
    <div>
      {contact.map(contactItem => (
    <Contact avatar={contactItem.avatar} name={contactItem.name} online={contactItem.online} />
  ))}
    </div>
  );

















export default ContactList