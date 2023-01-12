import React from 'react'

const HocPrac = (Comp) => (props) => {
    console.log("props", props)
  return (
      <>
      <h1>{props.data[0]}</h1>
    <Comp {...props} />
    </>
  )
}

export default HocPrac