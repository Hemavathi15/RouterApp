import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  
  

  return (
    <>
      <div className="text-2xl">Contact Page</div>
      <div className="contact-details flex gap-4 flex-col">
        <button className="contact-info" onClick={() => navigate('info')}>Contact Info</button>
        <button className="Contact-form" onClick={() => navigate('form')}>Contact form</button>
      </div>
    </>
  );
};

export default Contact;