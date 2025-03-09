import '../styles/SocialLinks.css';


type LinkProps = {
  text: string
  icon: string
  url: string
}

type SocialLinksProps = {
  links: LinkProps[]
}

function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a key={index} href={link.url} className="social-button" target="_blank" rel="noopener noreferrer">
          <img src={link.icon} alt={link.text} className="icon" />
          <span className='link-text'>{link.text}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks;
