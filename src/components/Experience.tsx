import '../styles/Experience.css'

type ExperienceProps = { 
    year: string;
    title: string;
    business: string;
    functions: string[];
    achievements: string[];
}

function Experience({year,title,business,functions,achievements}: ExperienceProps) {
    return (
    <div className="experience-card">
        <div className="experience-left">
            <div className="year-tag">{year}</div>
        </div>
        <div className="experience-right">
            <h1 className='title-experience'>{title}</h1>
            <h2 className='subtitle-experience'>{business}</h2>
            <span className='content-experience'>
                <div className="content-p">
                    <strong>Funciones:</strong><br />
                    <ul>
                        {functions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="content-p">
                    <strong>Logros:</strong><br />
                    <ul>
                        {achievements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </span>
        </div>
    </div>
    )
  }

export default Experience