import { Link } from "react-router-dom";
import "./App.css"

export function Home() {
  return (
    <div className="container">
      <nav className="nav">
        <button><Link to="/">Sobre Mim</Link></button>
        <button><Link to="/projetos">Projetos</Link></button>
        <button><Link to="/habilidades">Habilidades</Link></button>
        <button><Link to="/contatos">Contatos</Link></button>
      </nav>
      <h1>Gadiel Souza de Barros</h1>
      <h2>Desenvolvedor Front End Júnior</h2>
    </div>
  )
}

export function Projects() {
  return (
    <div className="container">
      <nav className="nav">
        <button><Link to="/">Sobre Mim</Link></button>
        <button><Link to="/projetos">Projetos</Link></button>
        <button><Link to="/habilidades">Habilidades</Link></button>
        <button><Link to="/contatos">Contatos</Link></button>
      </nav>
      <h1>Meus Projetos</h1>
    </div>
  )
}

export function Skills() {
  return (
    <div className="container">
      <nav className="nav">
        <button><Link to="/">Sobre Mim</Link></button>
        <button><Link to="/projetos">Projetos</Link></button>
        <button><Link to="/habilidades">Habilidades</Link></button>
        <button><Link to="/contatos">Contatos</Link></button>
      </nav>
      <div>
      <h1>Tecnologias/Hard Skills</h1>
      <h2>Principais Soft Skills</h2>
      </div>
    </div>
  )
}
export function Contacts() {
  return (
    <div className="container">
      <nav className="nav">
        <button><Link to="/">Sobre Mim</Link></button>
        <button><Link to="/projetos">Projetos</Link></button>
        <button><Link to="/habilidades">Habilidades</Link></button>
        <button><Link to="/contatos">Contatos</Link></button>
      </nav>
      <h1>Informações de contato</h1>
    </div>
  )
}