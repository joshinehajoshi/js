import React, {useState} from 'react'

function HocPrac() {
  return (
      <>
    <div>HocPrac</div>
    <HOC comp={Counter}/>
    </>
  )
}

function HOC(props) {
    return (
        <>
        <h2>New Hoc</h2>
        <props.comp/>
        </>
    )
}

function Counter() {
    return (
        <button>Counter Button</button>
    )
}

export default HocPrac