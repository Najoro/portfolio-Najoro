import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Title from "../Component/Base";
import { BiPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaHouse, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa6";
import { GiSwordman } from "react-icons/gi";

function ContactItem({ label, value, children }) {
  return (
    <div className="contact-info-item p-15">
      <div className="icone">
        <i>{children}</i>
      </div>
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
}
const Input = ({ type, placeholder, classe, name, value, onChange }) => {
  let c = `form-item ${classe} p-15`;
  return (
    <div className={c}>
      <div className="form-group">
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Envoi en cours...' });

    // Remplacez ces valeurs par vos propres identifiants EmailJS
    // Obtenez-les sur https://www.emailjs.com/
    const SERVICE_ID = 'portfolio_form_id';
    const TEMPLATE_ID = 'template_fkny8tr';
    const PUBLIC_KEY = 'unZOMMOhDlaRz6mIU';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email envoyé avec succès:', result.text);
        setStatus({ 
          type: 'success', 
          message: 'Message envoyé avec succès! Je vous répondrai bientôt.' 
        });
        // Réinitialiser le formulaire
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.error('Erreur lors de l\'envoi:', error.text);
        setStatus({ 
          type: 'error', 
          message: 'Une erreur s\'est produite. Veuillez réessayer.' 
        });
      });
  };

  return (
    <div className="contact section">
      <div className="container">
        <Title title={"Contact"} />
      </div>
      <div className="row">
        <ContactItem label="Phone" value="+261 34 31 058 82"><BiPhoneCall /></ContactItem>
        <ContactItem label="Email" value="najofanantenana@gmail.com"><MdMail /></ContactItem>
        <ContactItem label="Lot" value="67Ha sud"><FaHouse /></ContactItem>
        <ContactItem label="Pays" value="Madagascar/ Antananarivo"><GiSwordman /></ContactItem>
      </div>
      {/* <Question question={"N'hésite pas à m'écrire si tu as des questions"} p={"Je suis à votre disposition"} /> */}
      <div className="row">
        <div className="contact-form p-15">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="row">
              <Input 
                type="text" 
                classe="col-6" 
                placeholder="Nom" 
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
              />
              <Input 
                type="email" 
                classe="col-6" 
                placeholder="Email" 
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <Input
                type="text"
                classe="col-12"
                placeholder="Objet de votre email"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <div className="form-item col-12 p-15">
                <div className="form-group">
                  <textarea
                    name="message"
                    type="text"
                    className="form-control"
                    placeholder="Le message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-item col-6 p-15">
                <div className="form-group">
                  <button 
                    type="submit" 
                    className="btm"
                    disabled={status.type === 'loading'}
                  >
                    {status.type === 'loading' ? 'Envoi...' : 'Envoyer'}
                  </button>
                </div>
              </div>
              {status.message && (
                <div className={`bg-white form-item col-12 p-15 alert alert-${status.type === 'success' ? 'success' : 'danger'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* Social Media Section */}
      <div className="row">
        <div className="social-media-section">
          <h3 className="social-title">Suivez-moi sur les réseaux sociaux</h3>
          <div className="social-links">
            <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/votre-username" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/votre-username" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://facebook.com/votre-username" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
