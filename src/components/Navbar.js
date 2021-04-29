import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/settings">Settings</Link>
            <Link to="/game">Game</Link>
            <Link to="/scoreboard">Score</Link>
        </div>
    )
}

export default Navbar
