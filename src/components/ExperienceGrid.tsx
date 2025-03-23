import '../styles/ExperienceGrid.css'
import Experience from './Experience'
import flecha from '../assets/flecha.svg'

function ExperienceGrid() {
    return (
        <div className="experience-grid">
            <Experience year='2025' title='Product Analyst' business='Interbank - 2025' functions={['Product Analyst I de Factura Negociable (Factoring), enfoque en segmento de Banca Corporativa y Gran Empresa.','Automatización de diferentes procesos y reportes con Python y Visual Basic Application.','Scrapping web con Selenium para obtener información de forma esporádica.','Debugging de macros y scripts creados para generación de reportería.','Agile mindset y trabajo con metodologías ágiles bajo el marco SCRUM.']} achievements={['Product Analyst I de Factura Negociable (Factoring), enfoque en segmento de Banca Corporativa y Gran Empresa.','Automatización de diferentes procesos y reportes con Python y Visual Basic Application.','Scrapping web con Selenium para obtener información de forma esporádica.','Debugging de macros y scripts creados para generación de reportería.','Agile mindset y trabajo con metodologías ágiles bajo el marco SCRUM.']}/>

            {/* <Experience year='2024' title='Trainee Innovacion & IA' business='Neo Consulting - 2024' functions={['Investigacion y desarrollo de artículos, playbooks, información sobre Inteligencia Artificial Generativa.',' Generación de prompts en GPT-4 para el desarrollo de productos de innovación.','Apoyo en workshops B2B para facilitar soluciones de IA a empresas TOP del mercado peruano.','Gestión de proyectos de tecnología e IA. Gestión de proyectos con metodologías ágiles.','Creación de propuestas comerciales. Creación de Dashboards con Looker Studio.']} achievements={['Desarrollo de Prompt Battle en aniversario de NEO.','Creación de propuestas comerciales efectivas sobre IA Generativa.','Automatizaciones de procesos con JavaScript.']}/> */}

            <div className="other-projects">
            <a href="/portfolio-renzo/#/experience">
                <span>¡Conoce más experiencias!</span>
                <img src={flecha}></img>
            </a>
            </div>
        </div>
    )
  }

export default ExperienceGrid