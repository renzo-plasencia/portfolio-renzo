import '../styles/global.css'
import Hero from '../components/Hero.tsx'
import Section from '../components/Section.tsx'
import SkillGrid from '../components/SkillGrid.tsx'
import ProjectGrid from '../components/ProjectGrid.tsx'
import ExperienceGrid from '../components/ExperienceGrid.tsx'

function Home() {
  return (
<>
    <Hero />

    <div className='separator' id='Project'></div>
    <Section title='Proyectos' />
    <ProjectGrid />

    <div className='separator' id='Experiencia'></div>
    <Section title='Experiencia' />
    <ExperienceGrid />
    
    <div className='separator' id='Tecnologias'></div>
    <Section title='Tecnologías' />
    <SkillGrid />

  </> 
)
}

export default Home
