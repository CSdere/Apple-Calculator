import React from 'react';
import './App.css';

function appendToDisplay(input) {
  const display = document.getElementById('display');
  display.value += input;
}

function plusMinus() {
  const display = document.getElementById('display');
  display.value = (display.value) * -1;
}

function percentage() {
  const display = document.getElementById('display');
  display.value = (display.value) / 100;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = Math.round(eval(display.value) * 1000000 ) / 1000000
  } catch (error) {
    display.value = 'Error';
  }
}

function App() {
  return (
    <div>
      <i className="fa-brands fa-apple"></i>
      <h1>Calculator</h1>
      <div className="Calculator">
        <div className="Output">
          <input id="display" readOnly={true} placeholder="0" />
        </div>
        <div className="Buttons">
          <div className="Button">
            <button className="LightGrey" onClick={clearDisplay}>AC</button>
          </div>
          <div className="Button">
            <button className="LightGrey" style={{ transform: "rotate(180deg)", fontWeight: "500" }} onClick={plusMinus}>&#8723;</button>
          </div>
          <div className="Button">
            <button className="LightGrey" onClick={percentage}>%</button>
          </div>
          <div className="Button">
            <button className="Orange" onClick={() => appendToDisplay('/')} style={{ fontSize: "40px" }}>&divide;</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('7')}>7</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('8')}>8</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('9')}>9</button>
          </div>
          <div className="Button">
            <button className="Orange" onClick={() => appendToDisplay('*')} style={{ fontSize: "40px" }}>&times;</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('4')}>4</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('5')}>5</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('6')}>6</button>
          </div>
          <div className="Button">
            <button className="Orange" onClick={() => appendToDisplay('-')} style={{ fontSize: "40px" }}>-</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('1')}>1</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('2')}>2</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('3')}>3</button>
          </div>
          <div className="Button">
            <button className="Orange" onClick={() => appendToDisplay('+')}>+</button>
          </div>
          <div className="Button" id="Button0" style={{ borderRadius: "35px" }}>
            <button onClick={() => appendToDisplay('0')} className="DarkGrey" style={{ borderRadius: "40px", textAlign: 'left', paddingLeft: '25px' }}>0</button>
          </div>
          <div className="Button">
            <button className="DarkGrey" onClick={() => appendToDisplay('.')}>.</button>
          </div>
          <div className="Button">
            <button className="Orange" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
