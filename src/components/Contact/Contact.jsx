import React, { useState } from 'react'
import './Contact.css'
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EastIcon from '@mui/icons-material/East';
export default function Contact() {

    const[sendMessage,setSendMessage]=useState('')

    const sendEmail=()=>{   
        setSendMessage('Sending...')
        setTimeout(()=>{
            setSendMessage('Email sent successfully!')
        },3000)
    }
  return (
    <div className='contact container'>
        <div className="contact-col">
            <h3>Send a message <DraftsIcon className='contact-col-icon'/></h3>
            <p></p>
            <ul>
                <li><MailIcon className='li-icon'/>SavorySecrets@gmail.com</li>
                <li><PhoneIphoneIcon className='li-icon'/>+1 999-999-9999</li>
                <li><PlaceIcon className='li-icon'/>77 Massachusetts Av , Savory Secrets<br/>MA 02139 , United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' />

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' />

                <label>Write Your Messages Here</label>
                <textarea  name='message' rows='6' placeholder='Enter your message' />
                
                <div className='btn' onClick={sendEmail}>Submit Now<EastIcon className='btn-icon'/></div>
            </form>
            <span>{sendMessage}</span>
        </div>
    </div>
  )
}
