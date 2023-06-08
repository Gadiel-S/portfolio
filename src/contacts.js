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
      <Link className="botao-avancar" to="/">
        Voltar ao início
      </Link>
    </div>
  );
}
