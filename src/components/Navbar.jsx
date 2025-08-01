import logo from '../assets/logo.png';
import { useNavigate, NavLink, replace} from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar flex justify-around align-center  ">
        <div className="logo-container flex items-center gap-2 p-2">
          <img src={logo} alt="logo" />
          <span className="logo-text font-extrabold ">Hero Jobs</span>
        </div>
        <div className="nav-link-container flex items-center  rounded-full">
          <ul className="nav-links flex justify-between align-center gap-4">
            <NavLink to={"/"}>
              <li >Home</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li >About</li>
            </NavLink>
            <NavLink to={"/Jobs"}>
              <li >Jobs</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li >Contact</li>
            </NavLink>
          </ul>
        </div>

        <button className="nav-btn text-xs" onClick={()=>navigate('/contact' )}>Get Started</button>
      </nav>
    </>
  );
};

export default Navbar;
