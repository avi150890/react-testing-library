import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ buttonColor, setBbuttonColor ] = useState('red'); 
  const [ disabled, setDisabled ] = useState(false);
  const buttonColorText = buttonColor === 'red' ? 'blue' : 'red';
return (
  <div>
    <button onClick={()=> setBbuttonColor(buttonColorText)} disabled = {disabled} style={{ backgroundColor: disabled ? 'gray' : buttonColor }}>Change to {buttonColorText}</button>
    <input type="checkbox" id="disabled-button-checkbox" defaultChecked={disabled} onChange={(e)=> setDisabled(e.target.checked)} />
    <label htmlFor='disabled-button-checkbox'>Disable Button</label>
  </div>
);
}

export default App;
