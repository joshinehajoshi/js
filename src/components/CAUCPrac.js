import React from 'react';
import HocPrac from './HocPrac';

function CAUCPrac() {

    const InputHandler = (event) => {
        console.log(event.target.value)
    }
  return (
    <>
    <h1>Hello</h1>
    <input type="text" 
    placeholder='Enter Your Name'
    onChange={InputHandler}
    ></input>
    <button>Click Me</button>
    </>
  )
}

export default HocPrac(CAUCPrac);