import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "../../../components/layouts/navbar/categories";
import logo from "../../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const tooggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={"container-nav"}>
      <Link to="/">
        <img style={{ width: "70px" }} src={logo} />
      </Link>
      <ul>
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>

      <Link to="/carrito">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
