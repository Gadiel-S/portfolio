import api from "./images/capa-projeto-api.png";
import advice from "./images/capa-advice-generator-app.png";
import blogr from "./images/capa-blogr-landing-page.png";
import notifications from "./images/capa-notifications-page.png";
import baseApparel from "./images/capa-base-apparel-coming-soon.jpeg";
import articlePreview from "./images/capa-article-preview-component.jpeg";
import faqAccordion from "./images/capa-faq-accordion-card.jpeg";
import ratingComponent from "./images/capa-interactive-rating-component.jpeg";
import productPreview from "./images/capa-product-preview-card-component.jpeg";
import qrCode from "./images/capa-projeto-qr-code-components.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Projects() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="container">
      <nav className="menu">
        <Link to="/">Sobre Mim</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <h1>Meus Projetos</h1>
      <div className="projects-container">
        <section className="project">
          <h3>Advice Generator App</h3>
          <a
            href="https://gadiel-s.github.io/advice-generator-app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={advice} alt="Advice Generator app" />
          </a>
          <p>
            Site que que mostra um conselho de número aleatório, e quando o
            botão com um dado é clicado, é mostrado um outro conselho, mostrando
            um aviso enquanto o conselho está sendo carregado, desenvolvido
            utilizando HTML, CSS e Javascript.
          </p>
        </section>

        <section className="project">
          <h3>Blogr Landing Page</h3>
          <a
            href="https://gadiel-s.github.io/Blogr-landing-page/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={blogr} alt="Blogr Landing Page" />
          </a>
          <p>
            Landing Page/site institucional de uma empresa fictícia chamada
            Blogr, desenvolvido utilizando Sass, Javascript, CSS e HTML.
          </p>
        </section>

        <section className="project">
          <h3>Notifications Page</h3>
          <a
            href="https://gadiel-s.github.io/notifications-page/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={notifications} alt="Base Apparel" />
          </a>
          <p>
            Página de notificações com notificações que quando clicadas, são
            marcadas como lidas e o contador de notificações é então atualizado,
            desenvolvido usando HTML, CSS e Javascript.
          </p>
        </section>

        <section className={mostrar ? "project" : "escondido"}>
          <h3>Base Apparel Coming Soon</h3>
          <a
            href="https://gadiel-s.github.io/base-apparel-coming-soon/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={baseApparel} alt="Base Apparel" />
          </a>
          <p>
            Página de "chegando em breve", onde há um campo para enviar seu
            email no qual ele é validado antes de ser enviado, desenvolvido
            usando HTML, CSS e Javascript.
          </p>
        </section>

        <section className={mostrar ? "project" : "escondido"}>
          <h3>Article Preview Component</h3>
          <a
            href="https://gadiel-s.github.io/article-preview-component/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={articlePreview} alt="Article Preview" />
          </a>
          <p>
            Site com um artigo no meio com um botão que mostra as redes sociais
            quando clicado, desenvolvido usando HTML, CSS e Javascript.
          </p>
        </section>

        <section className={mostrar ? "project" : "escondido"}>
          <h3>FAQ Accordion Card</h3>
          <a
            href="https://gadiel-s.github.io/faq-accordion-card/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={faqAccordion} alt="FAQ Accordion" />
          </a>
          <p>
            Site de "Perguntas Feitas Frequentemente", ou FAQ, desenvolvido
            usando HTML, CSS e Javascript.
          </p>
        </section>

        <section className={mostrar ? "project" : "escondido"}>
          <h3>Interative Rating Component</h3>
          <a
            href="https://gadiel-s.github.io/interactive-rating-component/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ratingComponent} alt="Rating Component" />
          </a>
          <p>
            Site de avaliação interativo em que se escolhe um número entre 1 e 5
            para compor a avaliação, e depois de enviar mostra um cartão de
            "obrigado", desenvolvido usando HTML, CSS e Javascript.
          </p>
        </section>

        <section className={mostrar ? "project" : "escondido"}>
          <h3>Product Preview Card Component</h3>
          <a
            href="https://gadiel-s.github.io/product-preview-card-component/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={productPreview} alt="Product Preview" />
          </a>
          <p>
            Página com um preview de um produto, desenvolvido usando HTML e CSS.
          </p>
        </section>

        <section className={mostrar ? "project" : "escondido"}>
          <h3>QR Code Components</h3>
          <a
            href="https://gadiel-s.github.io/qr-codes-components/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={qrCode} alt="QR Code Component" />
          </a>
          <p>
            Página com um QR Code no meio linkando para o site do Front End
            Mentor, desenvolvido usando apenas HTML e CSS.
          </p>
        </section>

        <section className={mostrar ? "project" : "escondido"}>
          <h3>Projeto API</h3>
          <a
            href="https://gadiel-s.github.io/projeto-api/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={api} alt="Capa projeto API" />
          </a>
          <p>
            Esse é um projeto guiado feito para aprender como consumir APIs
            externas. Nele são mostrados cada post de um blog com um botão de
            ler que quando clicado leva para uma página com todas as postagens
            com o mesmo id e uma área para fazer um post. Esse site foi
            desenvolvido usando fetch do javascript, além de HTML e CSS básico.
          </p>
        </section>

        {/* <section className={mostrar ? "project" : "escondido"}>
          <h3>The Last Of Us</h3>
          <a
            href="https://gadiel-s.github.io/projeto-the-last-of-us/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={lastOfUs} alt="The Last Of Us" />
          </a>
          <p>
            Esse é um site com um carrosel de imagens sobre a série The Last Of
            Us, desenvolvido usando HTML, CSS e Javascript. É um projeto guiado
            feito para aprender as bases dessas tecnologias.
          </p>
        </section> */}
      </div>
      <button onClick={() => setMostrar(!mostrar)} className="project-button">
        {mostrar ? "Ver menos" : "Ver mais projetos"}
      </button>
      <Link className="botao-avancar" to="/habilidades">
        Ver Habilidades
      </Link>
    </div>
  );
}
