import logo from "./image/logo.svg";
import github from "./image/github.svg";
import linkedin from "./image/linkedin-in.svg";
import baseApparel from "./image/capa-base-apparel-coming-soon.jpeg";
import articlePreview from "./image/capa-article-preview-component.jpeg";
import faqAccordion from "./image/capa-faq-accordion-card.jpeg";
import ratingComponent from "./image/capa-interactive-rating-component.jpeg";
import productPreview from "./image/capa-product-preview-card-component.jpeg";
import qrCode from "./image/capa-projeto-qr-code-components.jpeg";
import pokedex from "./image/capa-projeto-pokedex.jpeg";
import lastOfUs from "./image/capa-projeto-the-last-of-us.jpeg";
import { Link } from "react-router-dom";
import "./App.css";
import "./scrollbar.css"

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
      <ul className="sobre-lista">
        <li>
          <a
            href="https://github.com/Gadiel-S"
            target="_blank"
            rel="noreferrer"
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
      <div className="projetos-container">
        <section className="projeto">
          <h3>Base Apparel Coming Soon</h3>
          <a href="https://gadiel-s.github.io/base-apparel-coming-soon/" target="_blank" rel="noreferrer">
            <img src={baseApparel} alt="Base Apparel" />
          </a>
          <p>Página de "chegando em breve", onde há um campo para enviar seu email no qual ele é validado antes de ser enviado, desenvolvido usando HTML, CSS e Javascript.</p>
        </section>

        <section className="projeto">
          <h3>Article Preview Component</h3>
          <a href="https://gadiel-s.github.io/article-preview-component/" target="_blank" rel="noreferrer">
            <img src={articlePreview} alt="Article Preview" />
          </a>
          <p>Site com um artigo no meio com um botão que mostra as redes
              sociais quando clicado, desenvolvido usando HTML, CSS e
              Javascript.</p>
        </section>

        <section className="projeto">
          <h3>FAQ Accordion Card</h3>
          <a href="https://gadiel-s.github.io/faq-accordion-card/" target="_blank" rel="noreferrer">
            <img src={faqAccordion} alt="FAQ Accordion" />
          </a>
          <p>Site de "Perguntas Feitas Frequentemente", ou FAQ, desenvolvido usando HTML, CSS e Javascript.</p>
        </section>

        <section className="escondido">
          <h3>Interative Rating Component</h3>
          <a href="https://gadiel-s.github.io/interactive-rating-component/" target="_blank" rel="noreferrer">
            <img src={ratingComponent} alt="Rating Component" />
          </a>
          <p>Site de avaliação interativo em que se escolhe um número entre 1 e 5 para compor a avaliação, e depois de enviar mostra um cartão de "obrigado", desenvolvido usando HTML, CSS e Javascript.</p>
        </section>

        <section className="escondido">
          <h3>Product Preview Card Component</h3>
          <a href="https://gadiel-s.github.io/product-preview-card-component/" target="_blank" rel="noreferrer">
            <img src={productPreview} alt="Product Preview" />
          </a>
          <p>Página com um preview de um produto, desenvolvido usando HTML e CSS.</p>
        </section>

        <section className="escondido">
          <h3>QR Code Components</h3>
          <a href="https://gadiel-s.github.io/qr-codes-components/" target="_blank" rel="noreferrer">
            <img src={qrCode} alt="QR Code Component" />
          </a>
          <p>Página com um QR Code no meio linkando para o site do Front End Mentor, desenvolvido usando apenas HTML e CSS.</p>
        </section>

        <section className="escondido">
          <h3>Pokédex</h3>
          <a href="https://gadiel-s.github.io/projeto-pokedex/" target="_blank" rel="noreferrer">
            <img src={pokedex} alt="Pokédex" />
          </a>
          <p>Esse é um site/projeto guiado de listagem de pokémon, desenvolvido usando HTML, CSS e Javascript.</p>
        </section>

        <section className="escondido">
          <h3>The Last Of Us</h3>
          <a href="https://gadiel-s.github.io/projeto-the-last-of-us/" target="_blank" rel="noreferrer">
            <img src={lastOfUs} alt="The Last Of Us" />
          </a>
          <p>Esse é um site com um carrosel de imagens sobre a série The Last Of Us, desenvolvido usando HTML, CSS e Javascript. É um projeto guiado feito para aprender as bases dessas tecnologias.</p>
        </section>
      </div>
      <button className="projeto-botao">Ver mais projetos</button>
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
        <section className="hard-container">
          <h3>Tecnologias/Hard Skills</h3>
        </section>
        <section className="soft-container">
          <h3>Principais Soft Skills</h3>
        </section>
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
