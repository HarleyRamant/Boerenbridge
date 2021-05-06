import Navbar from './Navbar'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import SetupPage from './SetupPage'
import RoundPage from './RoundPage'
import ScoreboardPage from './ScoreboardPage'
import SettingsPage from './SettingsPage'
import {useState} from 'react'
import './Mainscreen.css'

const Mainscreen = () => {
    /*DUMMYDATA*/ 
    const tempPlayers = [
        {
            id: 1,
            name: "Harley",
            roundData: [{
                round: 1,
                startScore: 10,
                bet: 0,
                get: 0,
                endScore: 10
            }]
        },
        {
            id: 2,
            name: "Kevin",
            roundData: [{
                round: 1,
                startScore: 10,
                bet: 0,
                get: 0,
                endScore: 10
            }]
        }
    ]
    const [players, setPlayers] = useState(tempPlayers);
    //const [players, setPlayers] = useState([]);
    




    return (
        <>
            <Router>
                <Switch>
                    <Route path='/mainscreen/setup'>
                        <Navbar title='Setup Game' />
                        <SetupPage players={players} setPlayers={setPlayers}/>
                    </Route>
                    <Route path='/mainscreen/round'>
                        <Navbar title='Game Round' />
                        <RoundPage data={players}/>
                    </Route>
                    <Route path='/mainscreen/scoreboard'>
                        <Navbar title='Scoreboard' />
                        <ScoreboardPage data={players}/>
                    </Route>
                    <Route path='/mainscreen/settings'>
                        <Navbar title='Settings' />
                        <SettingsPage data={players} setPlayers={setPlayers}/>
                    </Route>
                </Switch>
            </Router>    
        </>
    )
}

export default Mainscreen
