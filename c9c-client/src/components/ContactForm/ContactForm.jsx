import './ContactForm.scss';

import React, { useState } from 'react';
import axios from 'axios';

import email from '../../assets/icons/email.svg'; 


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    inquiry: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setResponseMessage('Message sent successfully!');
    } catch (error) {
      setResponseMessage('Failed to send message.');
    }
  };

  return (
    <section className="contact-form">
      <h2 className="contact-form__title">Contact Me Today!</h2>
 
        <form onSubmit={handleSubmit} className='contact-form__container'>
        <img 
            className='contact-form__icon'
            src={email} 
            alt="Email icon"
          />
          <div className='contact-form__name-email'>
            <div className='contact-form__inputs'>
              <input 
                type="text" 
                name="name" value={formData.name} 
                onChange={handleChange}
                placeholder="Full Name" 
                required 
              />
            </div>
            
            <div className='contact-form__inputs'>
              <input 
                type="email" 
                name="email" value={formData.email} 
                onChange={handleChange}
                placeholder="Email address"
                required 
              />
            </div>
          </div>
          <div className='contact-form__inputs'>
            <label className='contact-form__website'>If you already have a website, please let me know</label>
            <input 
              type="text" 
              name="website" value={formData.website} 
              placeholder="www.example.com"
              onChange={handleChange} 
            />
          </div>

          <div className='contact-form__inputs'>
            <label className='contact-form__inquiry'>Please provide more details about your inquiry</label>
            <textarea 
              name="inquiry" 
              value={formData.inquiry} 
              onChange={handleChange} required />
          </div>
         
          <button 
              type="submit"
              className='contact-form__button'
              >
                  Send
          </button>
        </form>

      {responseMessage && <p>{responseMessage}</p>}
    </section>
  );
};

export default ContactForm;