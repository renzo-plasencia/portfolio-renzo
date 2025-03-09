import '../styles/Skillcard.css'

function SkillCard({ link,img,text,category }:{link:string,img:string,text:string,category:string}) {
    return (
        <div className="skill-card" data-category={category}>
            <a href={link} target='_blank'>
                <img src={img} alt={text} />
                <p>{text}</p>
            </a>
        </div>
    )
  }

  export default SkillCard