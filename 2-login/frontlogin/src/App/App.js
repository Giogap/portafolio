import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "../Home/Home";
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Formulario from '../Formulario/Formulario';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/formulario' element={<Formulario />} />
      </Routes>

    </Router>
  );
}

export default App;