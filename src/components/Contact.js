import React from 'react';
import { Menu } from './Menu';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

export function Contact() {
  return (
    <>
    
    <Menu/>
    <section id='contact'>
    {/* <h4>Get In Touch</h4> */}
    <h2>Contact me</h2>
    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon' />
          <h4>Email</h4>
          <h5>murthykichu@gmail.com</h5>
          <a href='murthykichu@gmail.com'>Send a message</a>
        </article>
        <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon' />
          <h4>messenger</h4>
          <h5>KrishnaMessenger</h5>
          <a href='krishnaMessenger'>Send a message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon' />
          <h4>WhatsApp</h4>
          <h5>7708367085</h5>
          <a href='Krishna'target='_blank'>Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form action='' className='form1'>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name="message" rows={7} placeholder='Your message' required/>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
    </section>
    </>
  );
}

