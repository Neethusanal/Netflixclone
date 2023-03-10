import React, { useState } from 'react'

const Text = () => {
    const [count, setCount] = useState(0)

    const increment=()=>{
        setCount(count+1)
    } 
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Text