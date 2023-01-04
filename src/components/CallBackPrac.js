import React, { useState, useEffect, useCallback} from 'react'
import CounterComp from './CounterComp';

function CallBackPrac() {

    const [counter, setCounter] = useState(0);
    const [ counterTwo, setCounterTwo] = useState(0);

    const IncrementCounter = () => {
        setCounter(counter+1);
    }

    const Fun = useCallback(() =>  {
     setCounterTwo(counterTwo+1)
    }, [counterTwo])
   
   
  return (
    <>
    <CounterComp counterTwo={counterTwo} fun={Fun}/>
    <button onClick={IncrementCounter}>Counter: {counter}</button>
    </>
  )
}

export default CallBackPrac