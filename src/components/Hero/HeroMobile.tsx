import './Hero.css'
import heroImage from '../../assets/images/hero-mobile.jpg';
const HeroMobile = () => {
    return (
        <div className='hero-mobile'>
            <img src={heroImage} className="hero-img" alt="Hero Image" />
        </div>
    )
}

export default HeroMobile