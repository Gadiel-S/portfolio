import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import react from "./images/reactjs.png";
import typescript from "./images/typescript.png";
import sass from "./images/sass.png";
import bootstrap from "./images/bootstrap.png";
import git from "./images/git.png";
import github from "./images/github.svg";
import npm from "./images/npm.png";
import mysql from "./images/mysql.png";
import { Link } from "react-router-dom";

export function Skills() {
  return (
    <div className="container">
      <nav className="menu">
        <Link to="/">Sobre Mim</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div className="skills-container">
        <h1>Habilidades</h1>
        <section className="hard-container">
          <h3>Tecnologias/Hard Skills</h3>
          <ul className="hard-lista">
            <li>
              <p>HTML5</p>
              <img src={html} alt="HTML5" />
            </li>
            <li>
              <p>CSS3</p>
              <img src={css} alt="CSS3" />
            </li>
            <li>
              <p>Javascript</p>
              <img src={javascript} alt="Javascript" />
            </li>
            <li>
              <p>React</p>
              <img src={react} alt="React" />
            </li>
            <li>
              <p>Typescript</p>
              <img src={typescript} alt="Typescript" />
            </li>
            <li>
              <p>Sass</p>
              <img src={sass} alt="Sass" />
            </li>
            <li>
              <p>Bootstrap</p>
              <img src={bootstrap} alt="Bootstrap" />
            </li>
            <li>
              <p>Git</p>
              <img src={git} alt="Git" />
            </li>
            <li>
              <p>Github</p>
              <img src={github} alt="Github" />
            </li>
            <li>
              <p>NPM</p>
              <img src={npm} alt="NPM" />
            </li>
            <li>
              <p>MySQL</p>
              <img src={mysql} alt="mysql" />
            </li>
          </ul>
        </section>
        <section className="soft-container">
          <h3>Principais Soft Skills</h3>
          <ul className="soft-lista">
            <li>Flexibilidade</li>
            <li>Resiliência</li>
            <li>Organização</li>
            <li>Disciplina</li>
            <li>Autodidata</li>
          </ul>
        </section>
      </div>
      <Link className="botao-avancar" to="/contatos">
        Ver Contatos
      </Link>
    </div>
  );
}
