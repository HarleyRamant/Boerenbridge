import Navbar from './Navbar'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import SetupPage from './SetupPage'
import RoundPage from './RoundPage'
import ScoreboardPage from './ScoreboardPage'
import SettingsPage from './SettingsPage'
import {useState} from 'react'


const Mainscreen = () => {


    

    return (
        <>
            <Router>
                <Switch>
                    <Route path='/mainscreen/setup'>
                        <Navbar title='Setup Game' />
                        <SetupPage/>
                    </Route>
                    <Route path='/mainscreen/round'>
                        <Navbar title='Game Round' />
                        <RoundPage />
                    </Route>
                    <Route path='/mainscreen/scoreboard'>
                        <Navbar title='Scoreboard' />
                        <ScoreboardPage />
                    </Route>
                    <Route path='/mainscreen/settings'>
                        <Navbar title='Settings' />
                        <SettingsPage/>
                    </Route>
                </Switch>
            </Router>    
        </>
    )
}

export default Mainscreen
