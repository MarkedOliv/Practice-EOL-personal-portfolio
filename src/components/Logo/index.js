import './index.scss';
import logo from '../../assets/img/cv-preview.PNG';
import document from '../../assets/CV-Img-EN.pdf';

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={logo} alt='CV-Preview'/>
            <a href={document} download className='flat-button'>Download CV</a>
        </div>
    )
}

export default Logo;