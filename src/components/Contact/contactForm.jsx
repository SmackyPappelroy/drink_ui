import './contact.css'
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef} from 'react'
import emailjs from '@emailjs/browser'


export const ContactForm =()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
      const form = useRef();
      
      const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        
  
        emailjs.sendForm('service_e682ozq', 'template_25txqla', form.current, 'r_SWyYMdkPvk2QaHW')
          .then((result) => {
              // show the user a success message
          }, (error) => {
              // show the user an error
          });
  
          alert("Your message is sended 😎")
  
          setMessage('');
          setEmail('');
          setName('');
      };
  
      return (
        <form ref={form} onSubmit={handleSubmit}>
      <div className="mailtome">
      <p>Name:</p>
      <input 
      type="text" 
      id='name'
      name="user_name" 
      placeholder='Enter name' 
      onChange={event => setName(event.target.value)}
      value={name}
      />
  
      <p>Email:</p>
      <input 
      type="email" 
      id='email'
      name="user_email" 
      placeholder='example@gmail.com'
      onChange={event => setEmail(event.target.value)}
      value={email}
      />
          
      <p>Message:</p>
      <textarea 
      className="message" 
      name="message" 
      type="text" 
      id='message'
      placeholder='Enter text here'
      onChange={event => setMessage(event.target.value)}
      value={message}
      />
      <p><button type="submit" className='send' value="Send"
      >Submit</button></p>
      </div>
        </form>
      );
     };