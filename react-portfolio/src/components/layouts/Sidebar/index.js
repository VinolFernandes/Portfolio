import './index.scss'
import {Link} from 'react-router-dom';
import LogoS from '../../../assets/images/Vinol.png';
import LogoSubtitle from '../../../assets/images/Vinol_sub.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img src={LogoSubtitle} alt="logo"/>
        </Link>
    </div>
)

export default Sidebar