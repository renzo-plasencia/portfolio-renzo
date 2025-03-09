import '../styles/ProjectCard.css'

type ProjectCardProps = {
    link: string;
    img: string;
    title: string;
    content: string;
    tags: string[];
  };
  
  function ProjectCard({ link, img, title, content, tags }: ProjectCardProps) {
    return (
      <div className="project-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={img} alt={title} />
          <div className="project-content">
            <div className="project-etiquetas">
              {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <span className="title-project">{title}</span>
            <span className="content-project">{content}</span>
          </div>
        </a>
      </div>
    );
  }

  export default ProjectCard