import React, { useState } from 'react';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Starta loader

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value || "Ej angivet",
      message: e.target.message.value,
    };

    const emailData = {
      subject: "Nytt meddelande från mywebpage kontaktformulär",
      body: `Namn: ${formData.name}, E-post: ${formData.email}, Telefonnummer: ${formData.phone}, Meddelande: ${formData.message}`
    };

    try {
      const response = await fetch('https://myapi-bubycqeyg2awapd6.northeurope-01.azurewebsites.net/api/Email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setSuccess(true);
        setError(false);
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (error) {
      console.error("Ett fel inträffade:", error);
      setSuccess(false);
      setError(true);
    } finally {
      setLoading(false);  // Stoppa loader
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contactform">
        <div className="contactform-text">
          <h2>Kontakta mig</h2>

          <p className="fat">Kontakta mig för CV, personligt brev och utbildningsdokument</p>
          <p>Jag erbjuder möjligheten att komma i kontakt med mig för att få tillgång till mitt CV, 
          personliga brev och andra relevanta dokument från min utbildning, inklusive examensbevis.</p>

          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefonnummer (valfritt)</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Meddelande</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Skickar...' : 'Skicka'}
          </button>

          {success && <div className="alert alert-success">Ditt meddelande har skickats!</div>}
          {error && <div className="alert alert-error">Något gick fel, försök igen.</div>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
