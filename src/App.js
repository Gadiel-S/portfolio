import logo from "./image/logo.svg";
import github from "./image/github.svg";
import linkedin from "./image/linkedin-in.svg";
import { Link } from "react-router-dom";
import "./App.css";

export function Home() {
  return (
    <div className="container">
      <nav className="menu">
        <Link to="/">Sobre Mim</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <h1>Gadiel Souza de Barros</h1>
      <h2>
        Desenvolvedor Front End Júnior
        <img src={logo} className="logo spin" alt="logo" />
      </h2>
      <ul className="sobre-links">
        <li>
          <a
            href="https://github.com/Gadiel-S"
            target="_blank"
          >
            <img className="sobre-link" src={github} alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gadielsouzafrontend/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="sobre-link" src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>

      <p className="sobre">
        Olá, me chamo Gadiel, sou um desenvolvedor Front End Júnior atualmente
        estudando para conseguir minha primeira oportunidade. Como
        desenvolvedor, me preocupo em construir soluções bem feitas e me esforço
        pra isso, sempre em busca de evolução e de novos conhecimentos. Me
        considero uma pessoa tranquila, resiliente e possuo facilidade de
        aprendizado.
      </p>
      <Link className="botao-avancar" to="/projetos">
        Ver Projetos
      </Link>
    </div>
  );
}

export function Projects() {
  return (
    <div className="container">
      <nav className="menu">
        <Link to="/">Sobre Mim</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <h1>Meus Projetos</h1>
      <div className="projetos">
        <section className="projeto">
          <p></p>
        </section>
      </div>
      <Link className="botao-avancar" to="/habilidades">
        Ver Habilidades
      </Link>
    </div>
  );
}

export function Skills() {
  return (
    <div className="container">
      <nav className="menu">
        <Link to="/">Sobre Mim</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div>
        <h1>Habilidades</h1>
        <h2 className="skills-sub">Principais Soft Skills</h2>
      </div>
      <Link className="botao-avancar" to="/contatos">
        Ver Contatos
      </Link>
    </div>
  );
}
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
      <Link className="botao-avancar" to="/">
        Voltar ao início
      </Link>
    </div>
  );
}
