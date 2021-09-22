import './App.css';

import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Random from './Components/Random';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Navbar />
        <Switch>

        <Route exact path="/" component={Home}>
          <Home />
        </Route>

        <Route exact path="/search/:date/:camera" component={Feed}>
          <Feed />
        </Route>

        <Route exact path="/random" component={Random}>
          <Random />
        </Route>


        </Switch>
      </Router>
  );
}

export default App;
