import LogoTitle from '../../assets/images/Vinol.png';
import {Link } from 'react-router-dom';
import './index.scss';

const Home= () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, I'm <br/>
                {/* <img src={LogoTitle} alt="developer"/> */}
                Vinol Fernandes
                </h1>
                <h2>
                    Final year Computer Science Student at NMAMIT, Nitte
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home