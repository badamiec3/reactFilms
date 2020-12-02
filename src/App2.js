import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/routes/About';
import Home from './components/routes/Home';
import Nav from './components/routes/Nav';
import Exercise from './components/routes/Exercise'

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/films" component={Exercise} />  
      <Route path="/about" component={About} />  
      <Redirect to="/"/>  
      </Switch>    
      </Router>
    </div>
  );
}

export default App;
