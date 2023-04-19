import React from "react";
import Contact from "../../components/contactComponent/Contact";
import { ContactItems } from "../../components/ContactItems";
import "./ContactPage.css";

const listContactItems = ContactItems.map((e) => {
  return <Contact key={e.id} text={e.text} color={e.color} />;
});

const ContactPage = () => {
  return (
    <div className="wrapperContainer1">
      <div className="displayContainer1">{listContactItems}</div>
    </div>
  );
};

export default ContactPage;
