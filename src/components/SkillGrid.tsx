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
      {category:'Web', link: link, img: "https://cdn.worldvectorlogo.com/logos/html-1.svg", text: "HTML"},
      {category:'Web', link: link, img: "https://cdn.worldvectorlogo.com/logos/css-3.svg", text: "CSS"},
      {category:'Web', link: link, img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg", text: "JavaScript"},
      {category:'Web', link: link, img: "https://cdn.worldvectorlogo.com/logos/react-2.svg", text: "React"},
      {category:'Web', link: link, img: "https://cdn.worldvectorlogo.com/logos/php-4.svg", text: "Php"},
      {category:'Web', link: link, img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg", text: "Figma"},  
      {category:'Data', link: link, img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", text: "Python"},
        {category:'Data', link: link, img: "https://k21academy.com/wp-content/uploads/2021/06/AI-100_ProductImage.png", text: "Azure AI 102"},
        {category:'Data', link: link, img: "https://www.svgrepo.com/show/354321/selenium.svg", text: "Scrapping"},
        {category:'Data', link: link, img: pandas_logo, text: "Pandas"},
        {category:'Data', link: link, img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", text: "Matplotlib"},
        {category:'Data', link: link, img: sql, text: "SQL"},
        {category:'Data', link: link, img: teradata, text: "Teradata"},
        {category:'Data', link: link, img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", text: "Power BI"},
        {category:'Data', link: link, img: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", text: "Tableau"},
        {category:'Data', link: link, img: "https://cdn.worldvectorlogo.com/logos/excel-4.svg", text: "Excel"},
        {category:'Data', link: link, img: "https://www.svgrepo.com/show/374159/vba.svg", text: "Visual Basic Application"},
        {category:'Data', link: link, img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", text: "IA Generativa"},
        {category:'Data', link: link, img: "https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg", text: "Google Analytics"},
        {category:'Data', link: link, img: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", text: "SalesForce"},
        {category:'Data', link: link, img: github, text: "GitHub"},
        {category:'Backend', link: link, img: "https://cdn.worldvectorlogo.com/logos/spring-boot-1.svg", text: "Spring Boot 3"},
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