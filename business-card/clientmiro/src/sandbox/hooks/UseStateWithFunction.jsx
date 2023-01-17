import {useState} from 'react'
import Button from '@mui/material/Button'

const UseStateWithFunction = () => {
    const [counter,setCounter] = useState(0)
    const ChangeNumber = (_term)=>{
      if(_term === "increment") return setCounter((prev)=>prev+1)
      if(_term === "decrement") return setCounter((prev)=>{
        if(prev) return prev-1
        return prev
      })
      setCounter(0)
      
    }
  return (
    <div>
        <p>{counter}</p>
        <Button variant="outlined" color="primary" onClick={()=>ChangeNumber("increment")}>
          +
        </Button>
        <Button variant="outlined" color="primary" onClick={ChangeNumber}>
          Reset
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>ChangeNumber("decrement")}>
          -
        </Button>
    </div>
  )
}

export default UseStateWithFunction