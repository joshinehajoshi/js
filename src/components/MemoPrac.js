import React, { useState, useEffect, useMemo} from 'react'

function MemoPrac() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const IncremenetOne = () => {
      console.log("1")
      setCounterOne(counterOne + 1)
    }

    const IncremenetTwo = () => {
      console.log("2")
      setCounterTwo(counterTwo + 2)
    }

    const IsEven = () => useMemo(() =>{
      
        console.log("hello");
        return counterOne%2 === 0
      
    }, [counterOne])


  return (
   <>
   <div>
     <h3>Counter One</h3>
     <button onClick={IncremenetOne}>Counter One</button> <span>Value: {counterOne} </span>
   </div>
   <div>
     <h3>Counter Two</h3>
     <button onClick={IncremenetTwo}>Counter Two</button> <span>Value: {counterTwo}</span>
   </div>
   <div>
     <h3>Even/Odd: {IsEven()}</h3>
   </div>
   </>
  )
}

export default MemoPrac