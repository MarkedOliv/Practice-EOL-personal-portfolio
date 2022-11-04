import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio? portfolio.map((port, idx) => {
                        return (
                        <div className='image-box' key={idx}>
                            <img src={port.cover} alt='Port cover' className='portfolio-image'/>
                            <div className='content'>
                                <p className='title'>{port.title}</p>
                                <h4 className='description'>{port.description}</h4>
                                <button className='btn' onClick={()  => window.open(port.url)}>View</button>
                            </div>
                        </div>
                        )
                    }): null
                }
            </div>
        )
    }
    return (
        <div className='container portfolio-page'>
            <h1 className='page-title'>Portfolio</h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
    )
}

export default Portfolio;