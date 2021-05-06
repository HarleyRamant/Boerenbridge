import {Route, Switch} from 'react-router-dom'
//import {BrowserRouter as Router} from 'react-router-dom'
import {HashRouter as Router} from 'react-router-dom'
import styles from './App.css'
import Mainscreen from './components/Mainscreen';
import StartScreen from './components/StartScreen';

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

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <StartScreen />
          </Route>
          <Route path ='/Mainscreen'>
            <Mainscreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
