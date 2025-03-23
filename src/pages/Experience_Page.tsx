import Experience from '../components/Experience.tsx';
import Section from '../components/Section.tsx';
import '../styles/ExperiencePage.css';

function Experience_Page() {
    return (
      <div className='experience-page'>
        <div className='separator' id='Experiencia' />
        <Section title='Experiencia' />
        <Experience year='2025' title='Product Analyst' business='Interbank - 2025' functions={['Product Analyst I de Factura Negociable (Factoring), enfoque en segmento de Banca Corporativa y Gran Empresa.','Automatización de diferentes procesos y reportes con Python y Visual Basic Application.','Scrapping web con Selenium para obtener información de forma esporádica.','Debugging de macros y scripts creados para generación de reportería.','Agile mindset y trabajo con metodologías ágiles bajo el marco SCRUM.']} achievements={['Automatización de envío de correos masivos a través de buzones personalizados, reduciendo la manualidad en 90%','Automatización de reportería. Creación de tareas automaticas y programadas. Reduce la manualidad en un 95%.']}/>

        <Experience year='2024' title= 'Innovacion & Gen IA' business='Neo Consulting - 2024' functions={['Investigacion y desarrollo de artículos, playbooks, información sobre Inteligencia Artificial Generativa.',' Generación de prompts en GPT-4 para el desarrollo de productos de innovación.','Apoyo en workshops B2B para facilitar soluciones de IA a empresas TOP del mercado peruano.','Gestión de proyectos de tecnología e IA. Gestión de proyectos con metodologías ágiles.','Creación de propuestas comerciales. Creación de Dashboards con Looker Studio.']} achievements={['Desarrollo de Prompt Battle en aniversario de NEO.','Creación de propuestas comerciales efectivas sobre IA Generativa.','Automatizaciones de procesos con JavaScript.']}/>

        <Experience year='2024' title='Practicante Tarjeta de Crédito' business='Banbif- 2024' functions={['Apliqué estrategias digitales para llegar a los clientes de Tarjeta de Crédito VISA y Mastercard. Usando estrategias de fidelización con el fin de motivar el uso de las promociones del ClubHOLA. (Mailing)','Apoyé en la resolución de reclamos de tarjeta de crédito al área de back office.']} achievements={['Automaticé y mejoré reportes. Reducción de tiempos de búsqueda y exploración de archivos/datos.','Aumenté el envío de comunicaciones a los clientes de Tarjeta de Crédito. Aumentando el consumo de los descuentos.']}/>

        <Experience year='2023' title='Content Specialist' business='BCP - 2023' functions={['Me encargué del posicionamiento orgánico de ViaBCP.','Ejecuté estrategias digitales junto a stakeholders internos del banco.','Gestioné pedidos de stakeholders internos del banco con eficiencia.','Usé Adobe Analytics para visualizar métricas de la web cómo tráfico y clics y apoyar en la toma de decisiones.','Trabajé bajo el marco de metologías ágiles.']} achievements={['Soporte constante a diferentes áreas del banco, atención a sus pedidos y requerimientos a tiempo.','Optimizar el flujo de atención de pedidos de stakeholders al área.']}/>

        <Experience year='2022' title='Practicante Depósito a Plazo Fijo' business='Financiera Oh - 2022' functions={[
        'Cree reportes y dashboards para los productos de CTS y DPF. Gestión de funcionarios y ejecutivos de negocio encargados de la promoción comercial del producto.','Apoyé en la creación de reportes para el área comercial y retail de Plaza Vea, Inkafarma, Mifarma.','Envié comunicaciones a través de SalesFroce (CRM).']} achievements={['Creé dashboard en Power BI para seguimiento detallado de funcionarios y ejecutivos del equipo de ventas.','Automaticé reportes con la creación de macros en lenguaje VBA.','Mejora en Querys de Oracle – SQL para extracción y disposición rápida de información para la toma de decisiones.','Automatización en la actualización de status del producto usando tecnología GCP (BigQuery y Looker Studio).']}/>






      </div>
    );
  }
  
  export default Experience_Page;
  