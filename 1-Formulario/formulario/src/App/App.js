import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "../Home/Home";
import Form_B from "../Form_B/Form_B";
import Navbar from '../Navbar/Navbar';
import Form_A from '../Form_A/Form_A';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formb" element={<Form_B />} />
        <Route path="/forma" element={<Form_A />} />
      </Routes>

    </Router>
  );
}

export default App;