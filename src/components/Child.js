import React from 'react'

export default function Child(props) {
    const user = {
        name: 'Lisa Parker',
        email: 'lisa@gmail.com',
      }
      const onClick = () => {
        props.sendData(user)
      }
      return (
        <div>
          <button onClick={onClick}>Click Here</button>
        </div>
      )

  
}
