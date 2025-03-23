import Section from "../components/Section";
import ProjectCard from '../components/ProjectCard';
import dashboardVentas from '../assets/dashboard-image.png'
import automatizacionvba from '../assets/automatizacion-vba.png'
import pdf from '../assets/pdf-image.png'
import tc_image from '../assets/tc-image.png'
import encrypt_image from '../assets/encrypt-image.png'
import super_image from '../assets/super-image.png'
// import porfolio_image from '../assets/portafolio-image.png'

import '../styles/ProjectGrid.css'


function Project() {
  const projects = [
    {link:'/portfolio-renzo/#/projects/dashboard-ventas', img:dashboardVentas, title:'Dashboard Avance en Ventas DPF' ,content:'Se creó un dashboard usando Power Bi buscando conocer el avance en las ventas/colocaciones del producto Depósito a Plazo Fijo. Se muestra indicadores importantes para la gestión e historial de conversiones vs leads repartidos en diferentes cortes de tiempo.',tags:['Power BI','Excel']},

    {link:'/portfolio-renzo/#/projects/encriptacion-python', img:encrypt_image, title:'Encriptación de mensajes con Python' ,content:'Basado en la encriptación simétrica de Fernet. Con este desarrollo, tanto Back y Front End, se puede encriptar mensajes con una clave única. Esta luego servirá para poder descifrar el mensaje.',tags:['Python','Flask']},

    // {link:'/portfolio-renzo/#/projects/portfolio', img:porfolio_image, title:'Diseño y Desarrollo de un Portafolio Web Profesional' ,content:'Diseño, desarrollo y despliegue de un portafolio web profesional. La solución busca posicionar la marca personal en entornos digitales, optimizando la experiencia de usuario y destacando habilidades clave en desarrollo frontend. Incluye una interfaz moderna, responsive y accesible, ideal para destacar proyectos, experiencia laboral y conocimientos técnicos en desarrollo web.',tags:['React','TypeScript','CSS']}, 
    
    {link:'/portfolio-renzo/#/projects/automatizacion-vba', img:automatizacionvba, title:'Automatización con Macros en VBA' ,content:'Automatización inicial y básica con macros en lenguaje VBA de Excel que permitió automatizar múltiples acciones básicas y repetitivas para la creación del reporte general en el área de productos pasivos de una empresa financiera peruana. Estas macros fueron desarrolladas a necesidad del negocio y no se permitió escalar el formato a otro tipo de automatizaciones más complejas.',tags:['VBA','Excel']},

    {link:'/portfolio-renzo/#/projects/super-kuromi', img:super_image, title:'[#OffTopic] Super Kuromi - San Valentín' ,content:'Videojuego inspirado en Mario Bros pero con el personaje de Kuromi. La finalidad es hacer un #OffTopic por el día de San Valentín. Es un nivel sencillo pero que permite practicar las bases de JavaScript y la lógica que siguen los juegos.',tags:['JavaScript','HTML','CSS']}, 

    {link:'/portfolio-renzo/#/projects/editor-pdf', img:pdf, title:'Editor de archivos PDF Básico' ,content:'Proyecto que permite convertir PDF a imagen, imagen a PDF, unir y separar PDFs. Todo esto a través de consola. Es necesario tener instalado la dependencia pypdf en Python para poder ejecutarlo. ',tags:['Python','PyPDF']},    


    {link:'/portfolio-renzo/#/projects/scrapping-tc', img:tc_image, title:'Scrapping Exchange - TC diario' ,content:'Con este script desarrollado en python para obtener de forma automática el tipo de cambio de una casa de cambio peruana específica. Se busca obtener la tasa de compra y venta de dólares de forma diaria y que se guarde dentro de una Base de Datos.',tags:['Selenium','Python']},  

  ]   
  
  return (
      <>
      <div className='separator' id='Project'></div>
      <Section title='Proyectos' />
      <div className="project-grid-container">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard link={project.link} img={project.img} title={project.title} content={project.content} tags={project.tags} />))}
        </div>
      </div>

      </>
    );
  }
  
  export default Project;

  
  