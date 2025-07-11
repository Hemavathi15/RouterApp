import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ContactLayout from "./Layout/ContactLayout";
import RootLayout from "./Layout/RootLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<ContactInfo />} />
      <Route path="/form" element={<ContactForm />} />
    </Routes>
  );
}

export default App;
