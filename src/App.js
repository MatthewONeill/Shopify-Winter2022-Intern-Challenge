import './App.css';

import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//https://api.nasa.gov/planetary/apod?api_key=



function App() {
  
  return (
    <Router>
      <Navbar />
        <Switch>

        <Route exact path="/" component={Home}>
          <Home />
        </Route>

        <Route exact path="/search/:query" component={Feed}>
          <Feed />
        </Route>


        </Switch>
      </Router>
  );
}

export default App;
