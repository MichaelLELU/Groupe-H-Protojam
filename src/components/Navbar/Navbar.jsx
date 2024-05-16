import Menu from "../Menu/Menu";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="Menu">
      <img className="logo" src={logo} alt="logo BotanicWorld" />
      <h1 className="Titre">Botanic World</h1>
      <Menu />
    </nav>
  );
}
