import pageLogo from '../../assets/images/logo.svg'
import './Logo.css'

const Logo = () =>  {
    return (
        <div className='logo'>
        <a href="/">
            <img src={pageLogo} className="logo-img" alt="Site logo" />
        </a>
    </div>
    )
}

export default Logo