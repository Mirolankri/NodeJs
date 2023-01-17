import {useState} from 'react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'

const UseStateWithFunctionObject = () => {
  const InitData = {
    first:"",
    last:"Lankri"
  }
    const [Name,SetName] = useState(InitData)

    const ChangeNumber = (_term)=>{
      if(_term === "increment") return SetName((prev)=>prev+1)
      if(_term === "decrement") return SetName((prev)=>{
        if(prev) return prev-1
        return prev
      })
      SetName(InitData)
      
    }
  return (
    <div>
        <FormControl>
          <FormLabel>Your First Name iS:{Name.first} Your Last Name iS:{Name.last}</FormLabel>
          <TextField
            id="test"
            label="יש להזין שם"
            
            onChange={(e)=>SetName({...Name,first:e.target.value})}
            
          />
        </FormControl>

    </div>
  )
}

export default UseStateWithFunctionObject