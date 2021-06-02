import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Navigation from './components/Navigation.js';
import TestData from './pages/TestData';

function App() {
  return (
    <Router>
      <div className="App" extends Component>
        <Navigation projects={TestData}/>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
