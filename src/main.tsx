import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import Navbar from './components/Navbar.tsx'
import './styles/global.css'
import Hero from './components/Hero.tsx'
import Section from './components/Section.tsx'
import Footer from './components/Footer.tsx'
import SkillGrid from './components/SkillGrid.tsx'
import ProjectGrid from './components/ProjectGrid.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Navbar />
    <Hero />
    <Section title='Proyectos' />
    <ProjectGrid />

    <Section title='Experiencia' />
    {/* Cada card de experiencia */}
    
    <Section title='Tecnologías' />
    <SkillGrid />

    <Footer/>
   
  </StrictMode>,
)
