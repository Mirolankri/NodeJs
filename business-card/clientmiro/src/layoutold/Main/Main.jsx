import React from 'react'
import {node} from 'prop-types'
import { Box, Container, Grid } from '@mui/material'

const Main = ({children}) => {
  return (
    <Box sx={{backgroundColor:"#fbfbfb",minHeight:"85vh"}}>{children}</Box>
  )
}

Main.propTypes = {
    children:node.isRequired
}

export default Main