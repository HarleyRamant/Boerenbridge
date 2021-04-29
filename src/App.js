import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Game from './components/Game'
import Navbar from './components/Navbar'
import Startpage from './components/Startpage'
import Settings from './components/Settings'
import Scoreboard from './components/Scoreboard'


function App() {

  const players = [
    {
      id: 1,
      name: "Harley"
    },
    {
      id: 2,
      name: "Tim"
    }
  ];
  const test = "Dit is een test";



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Startpage />
          </Route>
          <Route path="/settings" >
            <Navbar />
            <Settings players={players}/>
          </Route>
          <Route path="/game">
            <Navbar />
            <Game />
           </Route>
          <Route path="/scoreboard">
            <Navbar />
            <Scoreboard />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
