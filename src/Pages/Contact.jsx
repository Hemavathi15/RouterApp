import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  
  

  return (
    <div className='Contact-main' >
      <h2 className="page-text ">Contact Page</h2>
      <div className="contact-details flex gap-4 mt-5 justify-center">
        <button className="contact-btn btn" onClick={() => navigate('info')}>Contact Info</button>
        <button className="contact-btn btn" onClick={() => navigate('form')}>Contact form</button>
      </div>
    </div>
  );
};

export default Contact;