import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  
  

  return (
    <>
      <div className="text-xl">Contact Page</div>
      <div className="contact-details flex gap-4 border">
        <button className="contact-info" onClick={() => navigate('info')}>Contact Info</button>
        <button className="Contact-form" onClick={() => navigate('form')}>Contact form</button>
      </div>
    </>
  );
};

export default Contact;