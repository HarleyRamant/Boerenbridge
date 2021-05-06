import './Navbar.css'
import {useState} from 'react'
import Hamburger from './Hamburger'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

    const [click, setClick] = useState(props.showNav)

    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='navbar-top'>
                <Hamburger onClick={handleClick}/>
                <h2>{props.title}</h2>
            </div>
            <div className={click ? "navbar-menu-active navbar-menu" : "navbar-menu-hidden navbar-menu"}>
                <ul>
                    <li onClick={handleClick}><Link to='/mainscreen/setup'>Setup Game</Link></li>
                    <li onClick={handleClick}><Link to='/mainscreen/round'>Game Round</Link></li>
                    <li onClick={handleClick}><Link to='/mainscreen/scoreboard'>Scoreboard</Link></li>
                    <li onClick={handleClick}><Link to='/mainscreen/settings'>Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
