import './Hamburger.css'

const Hamburger = (props) => {



    return (
        <div className='hamburger' onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Hamburger
