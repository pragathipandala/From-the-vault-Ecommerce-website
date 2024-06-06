import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  // const [page, setPage] = useState("Home");

  return (
    <header className=" w-full sticky top-0 z-50">
      <nav className=" py-6  px-12 flex justify-between items-center bg-white">
        <FontAwesomeIcon className="text-text" icon={faMagnifyingGlass} />
        <h1 className=" font-italiana text-[30px] text-text ">
          <Link to="/">FROM THE VAULT</Link>
        </h1>
        <div className="flex gap-5 text-text">
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />{" "}
        </div>
      </nav>
      <nav>
        <ul className=" font-twentieth bg-primary text-[18px] text-text flex  justify-center  gap-12 py-[9px] max-lg:hidden cursor-pointer ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-text"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-text"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sale"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-text"
              }
            >
              Sale
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-text"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-text"
              }
            >
              Contact
            </NavLink>
          </li>
          <div className="hidden max-lg:block ">
            {/* <img width={25} height={25} src={hamburger} /> */}
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
