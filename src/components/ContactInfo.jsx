import React from "react";

const ContactInfo = () => {
  return (
    <div className=" flex mt-4 flex-col  gap-2">
      <h1 className="text-md font-bold">Contact Information</h1>

      <a href="mailto:herojobs@gmail.com">
        <span className="font-bold">Email id:</span> herojobs@gmail.com
      </a>
      <div className="ph-num">
        <span className="font-bold">Call us</span>: 9876543321
      </div>
      <address><span className="font-bold">Address:</span>Lorem ipsum dolr sit.</address>
    </div>
  );
};

export default ContactInfo;
