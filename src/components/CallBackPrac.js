import React, { useState, useEffect, useCallback} from 'react'
import CounterComp from './CounterComp';

function CallBackPrac() {

    const [counter, setCounter] = useState(0);
    const [ counterTwo, setCounterTwo] = useState(0);

    const IncrementCounter = () => useCallback(() => {
        setCounter(counter+1);
    }, [counter]
)
    const Fun = () =>  {
        console.log("fun")
    }
   
  return (
    <>
    <CounterComp fun={Fun} />
    <button onClick={IncrementCounter}>Counter: {counter}</button>
    </>
  )
}

export default CallBackPrac