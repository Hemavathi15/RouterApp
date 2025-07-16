import React from "react";

const ContactForm = () => {
  return (
    <>
      <form className="flex flex-col gap-2">
        <input type="text" placeholder="Name"/>
        <input type="emaik" placeholder="Emailid" />
        <textarea type="Text" placeholder="Message" />
        <button className="submit-btn btn" type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
