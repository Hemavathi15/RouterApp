import React from "react";

const ContactForm = () => {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Name"/>
        <input type="emaik" placeholder="Emailid" />
        <textarea type="Text" placeholder="Message" />
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
