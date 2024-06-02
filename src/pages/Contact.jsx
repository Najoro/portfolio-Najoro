import React from "react";
import Title from "../Component/Base";
import { BiPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { GiSwordman } from "react-icons/gi";
function Question({ question, p }) {
  return (
    <>
      <h3 className="contact-title p-15">Si vous avez des question ?</h3>
      <h3 className="contact-sub-title p-15">Je suis a votre disposition</h3>
    </>
  );
}
function ContactItem({ label, value , children}) {
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
        <Question
          question={"Si vous avez des question ?"}
          p={"Si vous avez des question ?"}
        />
      </div>
      <div className="row">
        <ContactItem label="Phone" value="+261 34 31 058 82"><BiPhoneCall/></ContactItem>
        <ContactItem label="Email" value="najofanantenana@gmail.com"><MdMail /></ContactItem>
        <ContactItem label="Lot" value="67Ha sud"><FaHouse/></ContactItem>
        <ContactItem label="Contry" value="Madagascar/ Antananarivo"><GiSwordman /></ContactItem>
      </div>
      <Question question={"Envoyez une email si besoins"} p={"Je rependrais"} />
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
            <Input
              type={"text"}
              classe={"col-12"}
              placeholder={"Le message..."}
            />
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
    </div>
  );
}

export default Contact;
