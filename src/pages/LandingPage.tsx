import './LandingPage.css';
import Header  from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Hero from '../components/Hero/Hero';
import Content from '../components/Content/Content';
import Email from '../components/Email/Email';

const LandingPage = () => {

    return (
        <main>
            <div className='page'>
                <Logo />
                <Header />
                <Content />
                <Email />
            </div>
           <Hero />
        </main>
    )
}

export { LandingPage }