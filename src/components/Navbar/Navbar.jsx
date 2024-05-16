import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="Menu">
      <img className="logo" src={logo} alt="logo BotanicWorld" />
      <h1 className="Titre">Botanic World</h1>
      <div className="desktop">
        <Link id="button_home" to="/">
          Home
        </Link>
        <Link id="button_about" to="/about">
          About
        </Link>
      </div>
      <Menu />
    </nav>
  );
}
