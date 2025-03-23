import { useState } from 'react';
import '../styles/Navbar.css'
import github from '../assets/github_logo.svg'
import linkedin from '../assets/linkedin-logo.svg'
import menuIcon from '../assets/menuIcon.svg';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
    <>
    <nav className="navbar" id='navbar'>
        <ul className="nav-links desktop-only">
          <li><a href="/portfolio-renzo/#/">Inicio</a></li>
          <li><button onClick={() => scrollToSection('Project')}>Proyectos</button></li>
          <li><button onClick={() => scrollToSection('Experiencia')}>Experiencia</button></li>
          <li><button onClick={() => scrollToSection('Tecnologias')}>Tecnologías</button></li>
        </ul>


        <div className="nav-icons desktop-only">
            <a href="https://drive.google.com/file/d/15Dsf7mzEowt-3D_2daxB_NfsHCf8tUI2/view?usp=sharing" target="_blank" >Resume</a>
            <a href="https://github.com/renzo-plasencia" target="_blank" ><img src={github} alt='github'></img></a>
            <a href="https://www.linkedin.com/in/renzo-plasencia/" target="_blank" ><img src={linkedin}></img></a>
        </div>
        
        <div className="navbar mobile-only mobile-header">
          <div className="nav-inicio">
            <a href="/portfolio-renzo/#/">Inicio</a>
          </div>
          <div className="menu-icon" onClick={() => setIsMobileMenuOpen(true)}>
            <img src={menuIcon} alt="menu" id="sandwich" />
          </div>
        </div>

        
    </nav>
    
    <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>

        <button className="close-button" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        <div className="mobile-menu-content">
          <a href="https://drive.google.com/file/d/15Dsf7mzEowt-3D_2daxB_NfsHCf8tUI2/view?usp=sharing" target="_blank">Resume</a>
          <a href="https://github.com/renzo-plasencia" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/renzo-plasencia/" target="_blank">LinkedIn</a>
        </div>
      </div>
    
    </>
    )
  }

  export default Navbar