import React, {useState} from 'react'

function MainContent() {
 const [count,setCount] = useState(0)
 const addCount = () =>{
    setCount(count+1)
 }
 const decCount =() =>{
    setCount(count - 1)
 }

  return (
    <div>
        <div className='bclass'>
      <h1> Counter: {count}</h1>
      </div>
      <div className='bclass'>
        <button style= {{marginRight :10}} onClick={addCount}>+</button>
        <button  style= {{marginLeft :10}} onClick={decCount}>-</button>
      </div>
    </div>
  )
}

export default MainContent
