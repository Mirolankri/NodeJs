import {useState} from 'react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'

const UseStateWithComplexObject = () => {
  const UserData = {
    name:{
      first:"",
      last:"Lankri"
    },
    email:""
  }
    const [User,SetUser] = useState(UserData)

    // const ChangeNumber = (_term)=>{
    //   if(_term === "increment") return SetName((prev)=>prev+1)
    //   if(_term === "decrement") return SetName((prev)=>{
    //     if(prev) return prev-1
    //     return prev
    //   })
    //   SetName(InitData)
      
    // }
  return (
    <div>
        <FormControl>
          <FormLabel>Your First Name iS:{User.name.first} <br/> Your Last Name iS:{User.name.last}<br/> Your Email iS:{User.email}</FormLabel>
          <TextField
            id="test"
            label="יש להזין שם"
            
            onChange={(e)=>SetUser({...User, name:{...User,first:e.target.value}})}
            
          />
          <TextField
            id="test"
            label="יש להזין שם משפחה"
            
            onChange={(e)=>SetUser({...User, name:{...User,last:e.target.value}})}
            
          />
          <TextField
            id="test"
            label="יש להזין מייל"
            
            onChange={(e)=>SetUser({...User,email:e.target.value})}
            
          />
        </FormControl>

    </div>
  )
}

export default UseStateWithComplexObject