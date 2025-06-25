import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('TON_SERVICE_ID', 'TON_TEMPLATE_ID', form.current, 'TA_PUBLIC_KEY')
      .then((result) => {
        alert('✅ Message envoyé avec succès !');
        form.current.reset();
      }, (error) => {
        alert('❌ Une erreur est survenue, réessayez.');
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <label className="block text-white">Nom :</label>
      <input type="text" name="user_name" className="w-full rounded px-3 py-2" required />

      <label className="block text-white">Email :</label>
      <input type="email" name="user_email" className="w-full rounded px-3 py-2" required />

      <label className="block text-white">Message :</label>
      <textarea name="message" className="w-full rounded px-3 py-2 h-28" required></textarea>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
