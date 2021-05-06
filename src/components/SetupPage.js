import './SetupPage.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const SetupPage = (props) => {


    

    return (
        <div className='view setupPage' >
            <div className='setupPageButtonPanel'>
                <input type="text" id="addPlayer" placeholder='Player Name'/>
                <button onClick={addPlayer}>Add</button>
            </div>
            <h2>Players:</h2>
            <div className="setupPlayers">
                {props.players.map((player)=>(
                <h3 key={player.id}>{player.name}</h3>
                ))}
            </div>
            <Link to={props.players.length >= 2 ? '/mainscreen/round' : '#'}><button id='playBtn' className={props.players.length >= 2 ? 'btn-active' : 'btn-disabled'}>Play!</button></Link>
        </div>
    )

    function addPlayer(){
        const newPlayer = document.getElementById('addPlayer');
        if(newPlayer.value == ''){
            newPlayer.placeholder = 'Please enter a valid name';
        }
        else{
            console.log(`Adding ${newPlayer.value} to the game`);
            newPlayer.placeholder = 'Player Name';
            const player = {
                id: props.players.length+1,
                name: newPlayer.value,
                score: 10,
                roundInfo: []
            }
            newPlayer.value = '';
            props.setPlayers(props.players.concat(player))
        }
    }

}

export default SetupPage
