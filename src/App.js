import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './sections/Home.js';

function App() {
  return (
    <Router>
      <div className="App" extends Component>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
