import React from 'react'

const PlayerPanel = (props) => {

    const player = props.player


    return (
        <div className='playerPanel'>
            <h3>{player.name}</h3>
        </div>
    )
}

export default PlayerPanel
