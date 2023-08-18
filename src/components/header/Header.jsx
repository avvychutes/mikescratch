import { Link } from 'react-router-dom';
import './header.scss';

const Header = ()=> {
 return(
    <div className='header'>
        <Link to="/mikescratch">
            <div className='logo'></div>
        </Link>
        <div className='menu'> 

        </div>
    </div>
 )
}

export default Header;