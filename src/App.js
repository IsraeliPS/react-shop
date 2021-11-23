import "./App.css";
import React,{useState}  from "react";
import { Route, Routes, Link } from "react-router-dom";
import Atoles from "./Components/atole/atoles";
import Index from "./Components/landing/index";
import Tamales from "./Components/tamales/TamalesIndex";
// import ShoppingCar from "./Components/ShoppingCar/ShoppingCar";

function App() {
  const [global, setGlobal] = useState({})
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/tamales" >Tamales</Link>
        <Link to="/atoles" >Atoles</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tamales" element={<Tamales global={global} setGlobal={setGlobal}/>} />
        <Route path="/atoles" element={<Atoles global={global} setGlobal={setGlobal}/>} />
      </Routes>
    </div>
  );
}

export default App;
