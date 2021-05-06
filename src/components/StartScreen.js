import {Link} from 'react-router-dom'
import './Startscreen.css'

const StartScreen = () => {
    return (
        <div className='startscreen'>
            <div className="border">
                <Link to='/Mainscreen/setup'>New Game!</Link>
            </div>
        </div>
    )
}

export default StartScreen
