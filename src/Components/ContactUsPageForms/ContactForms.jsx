import React, { useState } from "react";
import "./ContactForms.scss";
import ContactMain from "../Contacts/ContactMain";
import ContactCallback from "../Contacts/ContactCallbacks.jsx/ContactGeneral";
import ContactQuotes from "../Contacts/ContactQuotes/ContactQuotes";
import ContactCareer from "../Contacts/ContactCareer/ContactCareer";
import Menu from "./Menu";

function ContactForms() {
  const [item, setItem] = useState(1);

  return (
    <section className="contact">
      <h1>What can we do for you</h1>
      <div className="nav-for-forms">
        <div
          style={{ left: `${item === 1 ? 0 : (item - 1) * 25}%` }}
          className="background"
        ></div>
        <Menu num={1} setItem={setItem} item={item} text="General Inquiries" />
        <Menu num={2} setItem={setItem} item={item} text="Request a Callback" />
        <Menu num={3} setItem={setItem} item={item} text="Request a Quote" />
        <Menu num={4} setItem={setItem} item={item} text="Careers" />
      </div>
      <div className="contact-form">
        <div className="all-contact-form-container">
          {item === 1 && <ContactMain headin={false} />}
          {item == 2 && <ContactCallback />}
          {item === 3 && <ContactQuotes />}
          {item === 4 && <ContactCareer />}
        </div>
      </div>
    </section>
  );
}

export default ContactForms;
