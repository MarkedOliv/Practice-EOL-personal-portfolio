import './index.scss';
import logo from '../../assets/img/programacion-web.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={logo} alt='logo'/>
        </div>
    )
}

export default Logo;