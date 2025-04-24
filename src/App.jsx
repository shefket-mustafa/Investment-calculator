import { useState } from "react";
import Display from "./components/display/Display"
import Header from "./components/header/Header"
import '/public/style.css'
import Results from "./components/results/Results";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >=1;

const handleChange = (inputIdentifier, newValue) => {
  setUserInput(previousInput => {
      return {
          ...previousInput,
          [inputIdentifier]: +newValue // this converts the string value in a number- need to do this because a value we get from an input 
                                        // will always be a string
      }
  })
}
  
  return (
    <>
      <Header />

      <Display onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <div style={{display: 'flex', justifyContent: 'center'}}><p style={{color: 'white'}}>Please enter a duration greater than zero.</p></div>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
