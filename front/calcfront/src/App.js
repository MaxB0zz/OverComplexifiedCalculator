import logo from './logo.svg';

import {Box, Button} from "@mui/material";
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
    <Box>
          <Calculator x={x} username={"Menace"}/>
    </Box>
  );
}

export default App;
