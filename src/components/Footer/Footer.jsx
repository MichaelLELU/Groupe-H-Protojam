import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github_1.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="copy">@2024 copyright</p>
      <Link to="https://www.instagram.com/">
        <img className="LogoInsta" src={instagram} alt="logo d'instagram" />
      </Link>
      <Link to="https://www.facebook.com/">
        <img className="LogoFacebook" src={facebook} alt="logo de facebook" />
      </Link>
      <Link to="https://github.com/MichaelLELU/Groupe-H-Protojam">
        <img className="LogoGithub" src={github} alt="logo de Github" />
      </Link>
    </div>
  );
}
