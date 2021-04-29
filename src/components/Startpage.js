import {Link} from 'react-router-dom'


const Startpage = () => {
    return (
        <div id="startpage">
            <div className="highlighter">
                <Link to="/settings">Start!</Link>
            </div>
        </div>
    )
}

export default Startpage
