import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "../../../components/layouts/navbar/categories";
import logo from "../../../assets/images/logo.jpg";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const tooggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={"container-nav"}>
      {/* logo o el nombre de la empresa  */}
      <img style={{ width: "70px" }} src={logo} />
      {/* al medio un listado de categorias clickeables */}
      <ul>
        {categories.map((category) => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
