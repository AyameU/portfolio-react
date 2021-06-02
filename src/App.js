import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <Router>
      <div className="App" extends Component>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
