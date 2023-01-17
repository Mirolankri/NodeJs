import {useState} from 'react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import { Box, Container, Grid } from '@mui/material'

const UseStateWithFunctionarrayofObject = () => {
  const InitTODO = {
    todo:""
  }
    const [task,SetTask] = useState(InitTODO)
    const [tasks,SetTasks] = useState([])

    // const ChangeNumber = (_term)=>{
    //   if(_term === "increment") return SetName((prev)=>prev+1)
    //   if(_term === "decrement") return SetName((prev)=>{
    //     if(prev) return prev-1
    //     return prev
    //   })
    //   SetName(InitData)
      
    // }
    const createNewTask = (e)=>{
      e.preventDefault()
      SetTasks([...tasks,task])
      return SetTask(InitTODO)
    }

  return (
    <div>
        <Container>
          <Grid container justifyContent='center'  spacing={2}>
            <Grid item xs={6}>
              <FormControl sx={{width:"100%"}}>
                <FormLabel>Task:{task.todo}</FormLabel>
                <TextField
                  id="test"
                  label="Enter Task Title"
                  onChange={(e)=>SetTask({...task,todo:e.target.value})}
                  value={task.todo}
                />
                <Button variant='outlined' onClick={createNewTask} disabled={!task.todo} >Add</Button>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              {tasks.map((value,index)=>(
                <li key={index}>
                  {index+1}. {value.todo}
                </li>
              )
              )}
            </Grid>
          </Grid>

        </Container>

    </div>
  )
}
//(e)=>SetName({...Name,first:e.target.value})
export default UseStateWithFunctionarrayofObject