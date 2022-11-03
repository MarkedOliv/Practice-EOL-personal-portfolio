import './index.scss';
import LiteralmenteYO from '../../assets/img/LiteralmenteYO.png'

const Photo = () => {
    return (
        <div className='photo-container'>
            <img className='photo' src={LiteralmenteYO} alt='Literally me'/>
        </div>
    )
}

export default Photo;