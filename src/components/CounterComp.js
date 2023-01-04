import React, {memo} from 'react'

function CounterComp() {
    console.log("Child Comp")
  return (
    <div>CounterComp</div>
  )
}

export default memo(CounterComp)