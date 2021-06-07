import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './sections/Home.js';

function App() {
  return (
    <Router basename={"/portfolio-react"}>
      <div className="App">
      <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
