import React, { useState } from 'react';
import './NewsLetter.css'; 
import emailjs from 'emailjs-com';

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      email: email,
    };

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((response) => {
        console.log('La mail è stata inviata con successo: ', response);
        setStatus('Grazie per esserti iscritto!');
        setEmail(''); // Pulisci il campo email dopo il successo
      })
      .catch((error) => {
        console.error('Si è verificato un errore durante l\'invio della mail: ', error);
        setStatus('Oops! Qualcosa è andato storto. Riprova.');
      });
  };

  return (
    <div className='newsletter'>
      <div className="newsletter-banner">
        <div className="newsletter-form">
          <h1>Iscriviti alla nostra Newsletter</h1>
          <p>Rimani aggiornato con le nostre ultime novità e offerte speciali.</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder='Inserisci la tua email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <button type='submit'>Iscriviti</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
