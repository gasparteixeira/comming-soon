import './LandingPage.css';
import Header  from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Hero from '../components/Hero/Hero';
import HeroMobile from '../components/Hero/HeroMobile';
import Content from '../components/Content/Content';
import Email from '../components/Email/Email';

const LandingPage = () => {

    return (
        <main>
            <div className='page'>
                <Logo />
                <HeroMobile />
                <Header />
                <Content />
                <Email />
            </div>
           <Hero />
        </main>
    )
}

export { LandingPage }