import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const onViaCallSubmit = () => {
    console.log("I am Ifra");
  };
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button
            onClick={onViaCallSubmit}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <div className={styles.outline_btn}>
          <Button
            onClick={onViaCallSubmit}
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />
        </div>
        <div className={styles.contact_control}>
          <fieldset className={styles.fieldset1}>
            <legend htmlFor="Name">Name</legend>
          </fieldset>
          <fieldset className={styles.fieldset1}>
            <legend htmlFor="Email">Email</legend>
          </fieldset>
          <fieldset className={styles.fieldset2}>
            <legend htmlFor="Text">Text</legend>
          </fieldset>
        </div>
        <Button onClick={onViaCallSubmit} text="SUBMIT BUTTON" />
      </div>
      <div className={styles.contactImage}>
        <img src="/images/contact.svg" alt="contact.svg" />
      </div>
    </section>
  );
};

export default ContactForm;
