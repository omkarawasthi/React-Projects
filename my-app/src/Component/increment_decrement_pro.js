import './increment_decrement_pro.css';
import { useState } from 'react';



function Increment(){
    const [count,setCount] = useState(0);
    function handleincr(){
        setCount(count+1);
    }

    function handledncr(){
        setCount(count-1);
    }

    function resets(){
        setCount(0);
    }
    return (
        <div className='Incr'>
            <div className='dncr'>
                Increment And Decrement
            </div>
            <div className='dcrbtn'>
                <button onClick = {handledncr}>
                    -
                </button>

            </div>
            <div className='input'>
                {count}
            </div>
            <div className='incbtn'>
                <button onClick = {handleincr}>
                    +
                </button>
            </div>
            <div className='rstbtn'>
                <button onClick = {resets}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Increment;