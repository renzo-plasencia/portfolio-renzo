import '../styles/Navbar.css'
import github from '../assets/github_logo.svg'
import linkedin from '../assets/linkedin-logo.svg'


function Navbar() {
    return (
    <nav className="navbar">
        <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
        </ul>
        <div className="nav-icons">
            <a href="https://github.com" target="_blank" >Resume</a>
            <a href="https://github.com/renzo-plasencia" target="_blank" ><img src={github} alt='github'></img></a>
            <a href="https://www.linkedin.com/in/renzo-plasencia/" target="_blank" ><img src={linkedin}></img></a>
        </div>
    </nav>
    )
  }

  export default Navbar