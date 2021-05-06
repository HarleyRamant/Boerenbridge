import React from 'react'
import {useState} from 'react'
import PlayerPanel from './PlayerPanel'

const RoundPage = (props) => {

    

    return (
        <div className='view'>
            <div className="round-info">
                <div>Round #</div>
                <div><span>Cards: &lt; # &gt;</span><span>Remaining #</span></div>
            </div>
            {props.data.length >= 2 ? showPlayers(): noPlayers()}
        </div>
    )

    function noPlayers(){
        return <h2>Please add some players first.</h2>
    }
    function showPlayers(){
        console.log(props.data);
        return props.data.map((player)=>{
            return <PlayerPanel key={player.id} player={player}/>
        })
    }
}

export default RoundPage
