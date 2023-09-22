import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import TrackingShipment from './pages/TrackingShipment.js/TrackingShipment';
import NoSipment from './pages/NoShipment.js/NoSipment';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/trackingshipment' element={<TrackingShipment />} />
          <Route path='/noshipment' element={<NoSipment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;