import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material";
import {useState} from "react";
import Calculator from "./Components/Calculator";

function App() {

    const [x, setX] = useState(0);
    function increment() {
        setX(x + 1);
    }
    function isChanged() {
        if (!x)
            return "x hasnt been changed yet";
        return "x has chnaged";
    }
  return (
    <div className="App">
          <Calculator x={x} username={"Menace"}/>
    </div>
  );
}

export default App;
