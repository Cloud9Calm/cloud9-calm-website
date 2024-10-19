import React from 'react';
import './FAQ.scss';
import faqs from '../../data/FAQ.json'; 

const FAQ = () => {
  return (
    <section className="faq">
        <div className='faq__main-container'>
        <h2 className="faq__title">Frequently Asked Questions →</h2>
        <ul className="faq__list">
            {faqs.map((faq, index) => (
            <li key={index} className="faq__item">
                <div className='faq__spacer'>   
                <h3 className="faq__question">{faq.question}</h3>
                <p className="faq__answer">{faq.answer}</p>
                </div>  
            </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;