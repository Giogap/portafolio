import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "../Home/Home";
import Form_B from "../Form_B/Form_B";
import Navbar from '../Navbar/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formb" element={<Form_B />} />
      </Routes>

    </Router>
  );
}

export default App;