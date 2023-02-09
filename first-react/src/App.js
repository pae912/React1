import './App.css';
import Test from './Test.js';
import Color from './Color.js';
import { useState } from 'react';
import Time from './Time';


const Hi = () => {
    return (
        <p>大家好</p>
    );
};

const Car = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    return (
        <>
          <h1 style={{color:"red"}}>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
        </>
      )
}

function App() {
    return (
        <>
            <h1>你好！</h1>
            <Test></Test>
            <Hi />
            <Color></Color>
            <Car></Car>
            <Time></Time>
        </>
    );
}

export default App;


