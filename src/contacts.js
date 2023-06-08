import linkedin from "./image/linkedin-in.svg";
import github from "./image/github.svg";
import { Link } from "react-router-dom";
import "./App.css";

export function Contacts() {
  return (
    <div className="container">
      <nav className="menu">
        <Link to="/">Sobre Mim</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <h1>Informações de contato</h1>
      <ul className="contacts-lista">
        <li>
          <a
            href="https://www.linkedin.com/in/gadielsouzafrontend/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <p>LinkedIn</p>
        </li>
        <li>
          <a
            href="https://github.com/Gadiel-S"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
          <p>Github</p>
        </li>
      </ul>
      <Link className="botao-avancar" to="/">
        Voltar ao início
      </Link>
    </div>
  );
}
