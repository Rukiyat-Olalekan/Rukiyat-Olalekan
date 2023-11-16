import { useRef } from "react";

import classes from "./ContactForm.module.css"

const ContactForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const websiteInputRef = useRef();
  const messageInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = nameInputRef.current.value;
    const enteredWebsite = nameInputRef.current.value;
    const enteredMessage = nameInputRef.current.value;

    console.log({
      enteredName,
      enteredEmail,
      enteredWebsite,
      enteredMessage,
    });
  };
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <h3>About you</h3>
      <div>
        <label>Your name</label>
        <input
          type="text"
          placeholder="e.g. Rukiyat Olalekan"
          ref={nameInputRef}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="e.g. rukiyatolalekan@gmail.com"
          ref={emailInputRef}
        />
      </div>
      <div>
        <label>Website</label>
        <input
          type="text"
          placeholder="e.g. https://rukiyatolalekan.com"
          ref={websiteInputRef}
        />
      </div>
      <div>
        <label>Leave a message</label>
        <textarea type="text" ref={messageInputRef}></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
