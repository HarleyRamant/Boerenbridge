

const Settings = (props) => {
    
    const players = props.players;

    return (
        <div className="view">
            <h2>Settings</h2>
            <div>
                <input type="text"/>
                <button>Add player</button>
            </div>
            <h3>Players:</h3>
            {players.map((player) => (
                <h3 key={player.id}>{player.name}</h3>
            ))}
        </div>
    )
}

export default Settings
