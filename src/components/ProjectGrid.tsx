import ProjectCard from './ProjectCard';
import flecha from '../assets/flecha.svg'
import '../styles/ProjectGrid.css'

import automatizacionvba from '../assets/automatizacion-vba.png'
import encrypt_image from '../assets/encrypt-image.png'
import super_image from '../assets/super-image.png'


function ProjectGrid() {
    
  const projects = [

    {link:'/portfolio-renzo/#/projects/encriptacion-python', img:encrypt_image, title:'Encriptación de mensajes con Python' ,content:'Basado en la encriptación simétrica de Fernet. Con este desarrollo, tanto Back y Front End, se puede encriptar mensajes con una clave única. Esta luego servirá para poder descifrar el mensaje.',tags:['Python','Flask']},

    
    {link:'/portfolio-renzo/#/projects/automatizacion-vba', img:automatizacionvba, title:'Automatización con Macros en VBA' ,content:'Automatización inicial y básica con macros en lenguaje VBA de Excel que permitió automatizar múltiples acciones básicas y repetitivas para la creación del reporte general en el área de productos pasivos de una empresa financiera peruana. Estas macros fueron desarrolladas a necesidad del negocio y no se permitió escalar el formato a otro tipo de automatizaciones más complejas.',tags:['VBA','Excel']},

    {link:'/portfolio-renzo/#/projects/super-kuromi', img:super_image, title:'[#OffTopic] Super Kuromi - San Valentín' ,content:'Videojuego inspirado en Mario Bros pero con el personaje de Kuromi. La finalidad es hacer un #OffTopic por el día de San Valentín. Es un nivel sencillo pero que permite practicar las bases de JavaScript y la lógica que siguen los juegos.',tags:['JavaScript','HTML','CSS']}, 


    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'App de Encriptación' ,content:'prueba2',tags:['Python','Flask']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Convertidor de PDF' ,content:'prueba2',tags:['Python']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Dashboard Ventas Avance' ,content:'prueba2',tags:['Excel','Power BI']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Macro Automatización' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'App Bomberos - Appscript' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Proyecto SQL' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Proyecto Java' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Proyecto IA' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Proyecto Scrapping' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Proyecto Python, Pandas, Matplotlib' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Proyecto Teradata' ,content:'prueba2',tags:['Excel','VBA']},
    // {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Proyecto Php' ,content:'prueba2',tags:['Excel','VBA']},
  ] 

    return (
      <div className="project-grid-container">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard link={project.link} img={project.img} title={project.title} content={project.content} tags={project.tags} />))}
        </div>
        <div className="other-projects">
          <a target='_self' href="/portfolio-renzo/#/projects">
            <span>Más proyectos</span>
            <img src={flecha}></img>
          </a>
        </div>
      </div>
    )
  }

  export default ProjectGrid