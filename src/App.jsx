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
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import RootLayout from "./layouts/RootLayout";
import ContactLayout from "./layouts/ContactLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

<Route path="/"  element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactLayout/>} >
      <Route path="info" element={<ContactInfo />} />
      <Route path="form" element={<ContactForm />} />
      </Route>
      <Route path="*" element={<Notfound/>}/>
    </Route>


    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
