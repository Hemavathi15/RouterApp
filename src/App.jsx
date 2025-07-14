import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
      <Navbar/>
    <div className="main flex justify-center items-center align-middle">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<ContactInfo />} />
      <Route path="/form" element={<ContactForm />} />
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
