import { useState } from 'react'
import SkillCard from './Skillcard'
import SkillFilter from './SkillFilter';
import '../styles/SkillGrid.css'
import pandas_logo from "../assets/pandas.svg"
import github from "../assets/github_logo.svg"
import sql from "../assets/sql.svg"
import teradata from "../assets/teradata.svg"

function SkillGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    
    const link = "https://www.linkedin.com/in/renzo-plasencia/"
    const skills = [
      {category:'Web', link: "https://drive.google.com/file/d/1D3MJykBdTeA4yvH9dc7tUfpTFM_81LuL/preview", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg", text: "HTML"},
      {category:'Web', link: "https://app.aluracursos.com/user/renzoplas06/course/html-css-trabajando-responsividad-publicacion-proyectos/certificate", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg", text: "CSS"},
      {category:'Web', link: "https://app.aluracursos.com/certificate/b090d730-8554-4c9d-ab35-b6cb9aedc3b8?lang", img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg", text: "JavaScript"},
      {category:'Web', link: link, img: "https://cdn.worldvectorlogo.com/logos/react-2.svg", text: "React"},
      {category:'Web', link: link, img: "https://www.php.net/images/logos/new-php-logo.svg", text: "Php"},
      {category:'Web', link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9ed65070-30f0-4512-b371-0b6f91c60897.pdf", img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg", text: "Figma"},  
      {category:'Data', link: "https://drive.google.com/file/d/13a3hBR9xK_vw5ehWYYbei0j1fOL-WQXs/preview", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", text: "Python"},
      {category:'Backend', link: "https://app.aluracursos.com/program/certificate/4b54448f-16f5-463a-b3b0-80c4a73d1710?lang", img: "https://www.vectorlogo.zone/logos/java/java-icon.svg", text: "Java 21"},
      {category:'Data', link: "https://learn.microsoft.com/en-us/users/renzoplasencia-8541/credentials/e64a78e199530b7e?ref=https%3A%2F%2Fwww.linkedin.com%2F", img: "https://k21academy.com/wp-content/uploads/2021/06/AI-100_ProductImage.png", text: "Azure AI 102"},
      {category:'Data', link: link, img: "https://www.svgrepo.com/show/354321/selenium.svg", text: "Scrapping"},
      {category:'Data', link: "https://drive.google.com/file/d/13a3hBR9xK_vw5ehWYYbei0j1fOL-WQXs/preview", img: pandas_logo, text: "Pandas"},
      {category:'Data', link: "https://drive.google.com/file/d/13a3hBR9xK_vw5ehWYYbei0j1fOL-WQXs/preview", img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", text: "Matplotlib"},
      {category:'Data', link: "https://drive.google.com/file/d/1gUShjBXwnN17iHzHrQ6LbKrAOSNkhwQy/preview", img: sql, text: "SQL"},
      {category:'Data', link: link, img: teradata, text: "Teradata"},
      {category:'Data', link: "https://drive.google.com/file/d/13ifV1jaMOW_PQTcpUE-oXe53p1f0CUVF/preview", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", text: "Power BI"},
      {category:'Data', link:"https://udemy-certificate.s3.amazonaws.com/pdf/UC-922326a1-efbf-4517-a381-0224343a0373.pdf", img: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", text: "Tableau"},
      {category:'Data', link: "https://drive.google.com/file/d/1qPKWtQXsVb65BeXbYfn-D166hluotgls/preview", img: "https://cdn.worldvectorlogo.com/logos/excel-4.svg", text: "Excel"},
      {category:'Data', link: "https://drive.google.com/file/d/1qPKWtQXsVb65BeXbYfn-D166hluotgls/preview", img: "https://www.svgrepo.com/show/374159/vba.svg", text: "Visual Basic Application"},
      {category:'Data', link: "https://www.cloudskillsboost.google/public_profiles/c4ab92b8-7821-4142-9d8d-978d3c0db753/badges/9653547", img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", text: "IA Generativa"},
      {category:'Data', link: "https://skillshop.credential.net/43521f36-61f4-4d4d-b25b-19406cce3b53#acc.IRh7JvUy", img: "https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg", text: "Google Analytics"},
      {category:'Data', link: link, img: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", text: "SalesForce"},
      {category:'Data', link: link, img: github, text: "GitHub"},
      {category:'Backend', link: "https://app.aluracursos.com/program/certificate/4b54448f-16f5-463a-b3b0-80c4a73d1710?lang", img: "https://cdn.worldvectorlogo.com/logos/spring-boot-1.svg", text: "Spring Boot 3"},
      {category:'Backend', link: link, img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", text: "Flask"}
    ]

    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
      <div className="skill-grid-container">
        <SkillFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        <div className="skill-grid">
                {filteredSkills.map((skill) => (
                    <SkillCard category={skill.category} link={skill.link} img={skill.img} text={skill.text} />
                ))}
        </div>
      </div>
    )
  }

  export default SkillGrid