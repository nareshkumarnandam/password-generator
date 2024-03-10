import './App.css';
import logo from './copy-icon.svg';
import {useState} from 'react';
import {generate} from '@wcj/generate-password';

function App() {
  const [checkUpperCase , setCheckUpperCase] = useState(true);
  const [checkLowerCase , setCheckLowerCase] = useState(true);
  const [checkNumber , setCheckNumber] = useState(true);
  const [checkCharacter , setCheckCharacter] = useState(true); 

  const [password , setPassword] = useState("");

  function clickHandler() {
    let lengthValue = document.getElementById("length").value;
    const generatedPassword = generate({lowerCase: checkLowerCase, upperCase: checkUpperCase, numeric: checkNumber, special: checkCharacter, length: lengthValue});
    if(!checkLowerCase && !checkUpperCase && !checkNumber && !checkCharacter){
      alert("Select any option");
    }
    if(lengthValue <8 || lengthValue >50){
      alert("Check the length");
    }else{
      setPassword(generatedPassword);
    }
    // setPassword(generatedPassword);
    console.log(generatedPassword);
  }


  return (
    <div className='main'>
    <h1>Password Generator
</h1>
    <div className="App">
      
      <div className='passwordDisplay'>
        <input type="text" className='password' readOnly value={password}/>
        <button className='copyBtn' onClick={() => {
            navigator.clipboard.writeText(password);
            // console.log(navigator);
        }}><img src={logo}></img></button>
      </div>
      <div className='lengthSelect'>
        <p>Select Password length(**8-50 characters**)</p>
        <input id='length' type="number" defaultValue={8} />
      </div>
      <div className='checkBoxes'>
        <div>
          <input defaultChecked={checkUpperCase} onChange={() => {
            setCheckUpperCase((previousState) => {
                return !previousState;
            })
          }} id="upperCase" type="checkbox" />
          <label htmlFor="upperCase">Include upper case</label>
        </div>
        <div>
          <input defaultChecked={checkLowerCase} onChange={() => {
            setCheckLowerCase((previousState) => {
              return !previousState;
            })
          }} id="lowerCase" type="checkbox" />
          <label htmlFor="lowerCase">Include lower case</label>
        </div>
        <div>
          <input defaultChecked={checkNumber} onChange={() => {
            setCheckNumber((previousState) => {
              return !previousState;
            })
          }} id="numbers" type="checkbox" />
          <label htmlFor="numbers">Include numbers</label>
        </div>
        <div>
          <input defaultChecked={checkCharacter} onChange={() => {
            setCheckCharacter((previousState) => {
              return !previousState;
            })
          }} id="characters" type="checkbox" />
          <label htmlFor="characters">Include characters</label>
        </div>
      </div>
      <div>
        <button className='generate' onClick={clickHandler}>Generate Password</button>
      </div>
    </div>
    </div>
  );
}

export default App;
