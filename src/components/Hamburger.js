import './Hamburger.css'

const Hamburger = (props) => {



    return (
        <div className={props.active ? 'hamburger hamburger-active' : 'hamburger'} onClick={props.onClick} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Hamburger
