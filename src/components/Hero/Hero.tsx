import './Hero.css'
import heroImage from '../../assets/images/hero-desktop.jpg';
const Hero = () => {
    return (
        <div className='hero'>
        <img src={heroImage} className="hero-img" alt="Hero Image" />
    </div>
    )
}

export default Hero