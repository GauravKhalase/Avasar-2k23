import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Event from './Pages/Event';
import Refund from './Pages/Refund';
import Navbar from './Components/Navbar';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Event-Info" element={<Event />} />
      <Route path="/Terms-and-Conditions" element={<Terms />} />
      <Route path="/Refund-Policy" element={<Refund />} />
      <Route path="/Privacy-Policy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
