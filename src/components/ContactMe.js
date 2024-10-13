import React, { useState } from 'react';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
  
    const emailData = {
      subject: "Nytt meddelande från kontaktformulär",
      body: `Namn: ${formData.name}, E-post: ${formData.email}, Meddelande: ${formData.message}`
    };    
  
    try {
      const response = await fetch('/api/Email/send', {
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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="contactform">
            <div className="contactform-text">
      <h2>Kontakta mig</h2>

      <p className="fat">Kontakta mig för CV, personligt brev och utbildningsdokument</p>
<p>Jag erbjuder möjligheten att komma i kontakt med mig för att få tillgång till mitt CV, 
personliga brev och andra relevanta dokument från min utbildning, inklusive examensbevis.
Genom att använda detta kontaktformulär kan du enkelt skicka en förfrågan som går till min backend som sen automatiskt skickar ett mail till mig.
Eftersom jag värnar om min personliga integritet, lägger jag inte ut mina privata dokument direkt online.
<span className="tilt">  Vid intresse skickar jag dem istället direkt till dig via e-post.</span> </p>

<p> Fyll i formuläret för att ta kontakt:</p>

<p> Namn och e-post är obligatoriska fält för att jag ska kunna svara dig.
Telefonnummer är valfritt, men om du lämnar det kan jag ringa upp dig om så önskas.
Ange gärna lite information om vad du är intresserad av i meddelandefältet (t.ex. vilken roll eller bransch du vill diskutera).
Efter att ha mottagit din förfrågan kommer jag att kontakta dig så snart som möjligt och dela med mig av de dokument du behöver.</p>
</div>
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

      <button type="submit">Skicka</button>

      {success && <div className="alert alert-success">Ditt meddelande har skickats!</div>}
      {error && <div className="alert alert-error">Något gick fel, försök igen.</div>}
    </div>
    </form>
  );
};

export default ContactForm;
