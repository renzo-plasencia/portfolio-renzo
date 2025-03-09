import ProjectCard from './ProjectCard';
import prueba from '../assets/image-prueba.png'
import '../styles/ProjectGrid.css'

function ProjectGrid() {
    
  const projects = [
    {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Prueba' ,content:'prueba2',tags:['a','b']},
    {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Prueba' ,content:'prueba2',tags:['a','b']},
    {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Prueba' ,content:'prueba2',tags:['a','b']},
    {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Prueba' ,content:'prueba2',tags:['a','b']},
    {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Prueba' ,content:'prueba2',tags:['a','b']},
    {link:'https://github.com/renzo-plasencia/portfolio-renzo', img:prueba, title:'Prueba' ,content:'prueba2',tags:['a','b']}
  ] 

    return (
      <div className="project-grid-container">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard link={project.link} img={project.img} title={project.title} content={project.content} tags={project.tags} />))}
        </div>
      </div>
    )
  }

  export default ProjectGrid