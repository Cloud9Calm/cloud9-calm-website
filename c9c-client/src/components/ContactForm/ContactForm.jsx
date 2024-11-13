import './ContactForm.scss';

import React, { useState } from 'react';
import axios from 'axios';

import email from '../../assets/icons/email.svg'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', website: '', inquiry: '', email: '' });
  const [emailSuggestions, setEmailSuggestions] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      generateEmailSuggestions(value);
    }
  };

  const generateEmailSuggestions = (input) => {
    const emailDomains = [
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'icloud.com',
      'aol.com',
      'mail.com'
    ];
    if (input.includes('@')) {
      setEmailSuggestions([]);
      return;
    }
    const suggestions = emailDomains.map(domain => `${input}@${domain}`);
    setEmailSuggestions(suggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, email: suggestion });
    setEmailSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    if (!recaptchaToken) {
      setResponseMessage('Please complete the reCAPTCHA.');
      return;
    }

    try {
      const response = await axios.post('/api/contact', { ...formData, recaptchaToken });
      console.log('API Response:', response.data);
      setResponseMessage('Your message has been sent successfully!');
      setFormData({ name: '', website: '', inquiry: '', email: '' }); 
      setRecaptchaToken(''); 
    } catch (error) {
      console.error('Error sending form data:', error);
      setResponseMessage('There was an error sending your message. Please try again later.');
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
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
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Full Name" 
              required 
            />
          </div>
          
          <div className='contact-form__inputs'>
            <input 
              type="text" 
              name="email" 
              value={formData.email} 
              placeholder="Email address"
              onChange={handleChange} 
            />
            {emailSuggestions.length > 0 && (
              <ul className='contact-form__suggestions'>
                {emailSuggestions.map((suggestion, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='contact-form__inputs'>
          <label className='contact-form__website'>If you already have a website, please let me know</label>
          <input 
            type="text" 
            name="website" 
            value={formData.website} 
            placeholder="www.example.com"
            onChange={handleChange} 
          />
        </div>

        <div className='contact-form__inputs'>
          <label className='contact-form__inquiry'>Please provide more details about your inquiry</label>
          <textarea 
            name="inquiry" 
            value={formData.inquiry} 
            onChange={handleChange} 
            required 
          />
        </div>       
        <button 
          type="submit"
          className='contact-form__button'
        >
          Send
        </button>
      </form>

      {responseMessage && <p className='response'>{responseMessage}</p>}
    </section>
  );
};

export default ContactForm;