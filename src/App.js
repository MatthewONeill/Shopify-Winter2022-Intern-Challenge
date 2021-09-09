import './App.css';

import Feed from './Components/Feed';
import Navbar from './Components/Navbar';

//https://api.nasa.gov/planetary/apod?api_key=



function App() {
  
  return (
    <div>
      <Navbar />
    
      <div className="App flex justify-center pt-6">
        <Feed />
      </div>
    </div>
  );
}

export default App;
