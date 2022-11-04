import './index.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoO from '../../assets/img/logo-o.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <div className='nav-bar'>
                <Link className='logo' to='/' onClick={() => setShowNav(false)}>
                    <img src={LogoO} alt='logo'/>
                </Link>
                <nav className={showNav ? 'mobile-show': ''}>
                    <NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio' onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                    </NavLink>
                    <FontAwesomeIcon
                        icon={faClose}
                        color='#F9F871'
                        size='3x'
                        className='close-icon'
                        onClick={() => setShowNav(false)}
                    />
                </nav>
                
                <ul>
                    <li>
                        <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/oliver-marquez-54837621a'>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/MarkedOliv'>
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon
                    icon={faBars}
                    color='#F9F871'
                    size='3x'
                    className='hamburger-icon'
                    onClick={() => setShowNav(true)}
                />
            </div>
    )
}

export default Sidebar;