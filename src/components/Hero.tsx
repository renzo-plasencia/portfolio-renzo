import '../styles/Hero.css'
import HeroText from './HeroText'
import ProfileImage from './ProfileImage'
import SocialLinks from './SocialLinks'
import linkedinIcon from '../assets/linkedin-logo.svg';
import githubIcon from '../assets/github_logo.svg';
import cvIcon from '../assets/cv.svg';


const linkedin = [
    { text: 'Renzo Plasencia', icon: linkedinIcon, url: 'https://linkedin.com/in/renzo-plasencia' },
  ]

const github = [
{ text: 'renzo-plasencia', icon: githubIcon, url: 'https://github.com/renzo-plasencia' },
]

const cv = [
    { text: 'Descargar CV', icon: cvIcon, url: 'https://linkedin.com/in/renzo-plasencia' },
]


function Hero() {
return (
    <section className="hero">
        <div className='hero-content'>
            <div className='hero-text'>
                <HeroText />
            </div>
        <div className='hero-buttons'>
            <SocialLinks links={linkedin}/>
            <SocialLinks links={github}/>
            <SocialLinks links={cv}/>
        </div>
        </div>
            <ProfileImage />
    </section>
)
}

export default Hero