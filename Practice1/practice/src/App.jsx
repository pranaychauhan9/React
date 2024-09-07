
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result';
import { useState } from "react";

 export default function App() {
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 120000,
    expectedReturn: 5,
    duration: 10,
  });

  const isInputValid = investmentInput.duration >=1;
function handleChange(inputIdetifier,newValue){
    setInvestmentInput(
        preInput =>{
            return{
                ...preInput,
                [inputIdetifier]:+newValue
            }
        }
    )

}


  return(
    <>
    
    <Header/>
    <UserInput investmentInput={investmentInput}onChange={handleChange}/>
    {!isInputValid && <p className='center'>Please Enter the Value Greater zero</p>}

    {isInputValid &&<Result  input={investmentInput}/>}
    </>
  )}

