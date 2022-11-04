import './index.scss';
import Photo from '../Photo';

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>
                <p>Interested in the BackEnd area with the ability to made web projects, always opting for them to have high scalability and modularizing to make it an easier task to work with my team.
                Experience working in JavaScript, NodeJS, React, Redux, SQL, PostgreSQL, Express, MongoDB, JWT, Firebase, etc.</p>
                <p>I am a tidy, patient, resilient programmer who strives to solve problems.</p>
                <p>I got interested in the world of programming due to family influences, and I'm so happy fot that since now I have skills that I never thought I would and I will continue on this path, striving to improve every day.</p>
            </div>
                <Photo/>
        </div>
    )
}

export default About;