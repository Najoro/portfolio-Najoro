import React from "react";
import Title from "../Component/Base";
import { BiPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaHouse, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa6";
import { GiSwordman } from "react-icons/gi";
function Question({ question, p }) {
  return (
    <>
      <h3 className="contact-title p-15">{question}</h3>
      <h3 className="contact-sub-title p-15">{p}</h3>
    </>
  );
}
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
const Input = ({ type, placeholder, classe }) => {
  let c = `form-item ${classe} p-15`;
  return (
    <div className={c}>
      <div className="form-group">
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          name=""
          id=""
        />
      </div>
    </div>
  );
};
function Contact() {
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
          <div className="row">
            <Input type={"text"} classe={"col-6"} placeholder={"Nom"} />
            <Input type={"email"} classe={"col-6"} placeholder={"Email"} />
          </div>
          <div className="row">
            <Input
              type={"text"}
              classe={"col-12"}
              placeholder={"Objet de votre email"}
            />
          </div>
          <div className="row">
            <div className="form-item col-12 p-15">
              <div className="form-group">
                <textarea
                  name=""
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Le message..."
                ></textarea>
              </div>
            </div>
            <div className="form-item col-6 p-15">
              <div className="form-group">
                <button type="submit" className="btm">
                  Envoyez
                </button>
              </div>
            </div>
          </div>
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
