import classes from "./Contact.module.css"

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.message}>
        <h1>Get in touch...</h1>
        <p>Send a message, I will respond as soon as possible.</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
