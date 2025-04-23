import './display.css';

export default function Display() {
  return (
      <>
      <div className='display-center'>
        <div className='display-container'>

            <div className='initial-investment'>
                <p>INITIAL INVESTMENT</p>
                <input type="number" />
            </div>

            <div className='anual-investment'>
                <p>ANUAL INVESTMENT</p>
                <input type="number" s/>
            </div>

            <div className='expected-return'>
                <p>EXPECTED RETURN</p>
                <input type="number" />
            </div>

            <div className='DURATION'>
                <p>DURATION</p>
                <input type="number" />
            </div>
        </div>
        </div>
      </>
    );
}