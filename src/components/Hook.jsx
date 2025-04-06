import React, { useEffect, useState } from 'react'
// let count = 0;
// count++ те ж саме count = count + 1
// count = 9
const Hook = () => {
    const [count, setCount] = useState(0)
    // const [змінна, сетерЗмінної] = useState(значенняПоДефолту)
    // setCount((prev)=>prev+1)
    useEffect(()=>{
        console.log(count)
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{
            // count=count+1
            setCount(count+1)
            // setCount((prev)=>prev+1)
        }} className='btn'>Click me!</button>
    </div>
  )
}

export default Hook