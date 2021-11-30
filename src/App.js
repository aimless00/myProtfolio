
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/details/:id'>
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
