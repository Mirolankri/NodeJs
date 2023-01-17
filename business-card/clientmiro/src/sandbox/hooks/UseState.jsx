import {useState} from 'react'
import Button from '@mui/material/Button'

const UseState = () => {
    const [counter,setCounter] = useState(0)
  return (
    <div>
        <p>{counter}</p>
        <Button variant="outlined" color="primary" onClick={()=>setCounter((prev)=>prev+1)}>
          +
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>setCounter(0)}>
          Reset
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>setCounter((prev)=>prev-1)}>
          -
        </Button>
    </div>
  )
}

export default UseState