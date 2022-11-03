import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo'

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/>I'm
                <span>Oliver Márquez</span>
                <br />
                Web Developer
                </h1>
                <h2>Full Stack Developer / JavaScript</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;