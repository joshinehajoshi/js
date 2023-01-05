import React from 'react'

const HocPrac = (Comp) => (props) => {
    console.log("props", props)
  return (
      <>
    <Comp {...props} />
    </>
  )
}

export default HocPrac