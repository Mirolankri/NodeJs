import {useState} from 'react'
import Button from '@mui/material/Button'
import { Box, Container, Divider, FormControl, FormLabel, Grid, TextField, Typography } from '@mui/material'

const UseStateLearnPost = () => {
  const InitialPost = {
    title:"",
    subtitle:"",
    author:"",
    createdAt:""
  }
    const [post,setPost] = useState(InitialPost)
    const [posts,setPosts] = useState([])
  const CreateNewPost = (e)=>{
    e.preventDefault()
    post.createdAt = new Date().toDateString()
    setPosts([...posts,post])
    return setPost(InitialPost)
  }
  return (
    <>
    <Container>
        <Grid container justifyContent='space-evenly' mt={0}>
          <Grid item>
            <FormControl>
            <Typography variant='h5'>Add New Post</Typography>

              <FormLabel>Title</FormLabel>
              <TextField id="test"
                  label="Enter Title"
                  onChange={(e)=>setPost({...post,title:e.target.value})}
                  value={post.title} />

            <FormLabel>SubTitle</FormLabel>
              <TextField id="test1"
                  label="Enter Sub Title"
                  onChange={(e)=>setPost({...post,subtitle:e.target.value})}
                  value={post.subtitle} />
        <FormLabel>Autor</FormLabel>
              <TextField id="test1"
                  label="Enter Sub Title"
                  onChange={(e)=>setPost({...post,author:e.target.value})}
                  value={post.author} />
                <Button variant='outlined' onClick={CreateNewPost} disabled={!post.title || !post.author} >Add Post</Button>

            </FormControl>
          </Grid>
          <Grid item>
            {!posts.length?`No Posts`:posts.map((post,index)=>(
              
              
              <Box sx={{ border:"1px solid #000",width:"400px" }} mt={3} p={2} key={index}>
                <Typography variant='h4'>{post.title}</Typography>
                <Divider/>
                <Typography variant='h5'>{post.subtitle}</Typography>                
                <Divider/>
                <Grid container justifyContent='space-between' alignItems="flex-end">
                <Box ><Typography variant='p'>Author: {post.author}</Typography></Box>
                <Box ><Typography variant='p' color={'gray'}>in: {post.createdAt}</Typography></Box>
                </Grid>
                
                
              </Box>
              
              
            ))}
          </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default UseStateLearnPost