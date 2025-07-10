import React, { useRef, useState } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_vsye4oi',
        'template_y723o64',
        form.current,
        'gvljS4arTCRN1wgKg'
      )
      .then(
        () => {
          setStatus('Bericht verstuurd!');
          form.current.reset();
        },
        (error) => {
          setStatus(`Niet verstuurd: ${error.text}`);
        }
      );
  };

  return (
    <div className='contact'>
      <div className='content'>
        <h1 className="page__title">Contact</h1>
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <input type="text" name="user_name" placeholder="Je Naam" required className="Input-Name" />
          <input type="email" name="email_from" placeholder="Je Email" required className="Input-Email" />
          <textarea name="message" placeholder="Je Bericht" required className="Input-Bericht" />
          <button type="submit" className="btn-Send">Verstuur</button>
          <p>{status}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;