import './display.css';

export default function Display({ onChange, userInput }) {

  return (
      <>
      <div className='display-center'>
        <div className='display-container'>

            <div className='initial-investment'>
                <p>INITIAL INVESTMENT</p>
                <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)}/>
            </div>

            <div className='anual-investment'>
                <p>ANUAL INVESTMENT</p>
                <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)}/>
            </div>

            <div className='expected-return'>
                <p>EXPECTED RETURN</p>
                <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)}/>
            </div>

            <div className='DURATION'>
                <p>DURATION</p>
                <input type="number" required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)}/>
            </div>
        </div>
        </div>
      </>
    );
}