import './index.scss';
import waiting from '../../assets/img/waiting.gif'

const Gif = () => {
    return (
        <div className='gif-container'>
            <iframe src={waiting} frameBorder="0" className="giphy-embed" allowFullScreen title='waiting'></iframe>
        </div>
    )
}

export default Gif;