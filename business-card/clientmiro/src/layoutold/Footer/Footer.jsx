import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import { BottomNavigationAction, Paper } from '@mui/material'
import {Facebook,Instagram,Twitter,Info,HeartBroken,Portrait} from '@mui/icons-material'
const Footer = () => {
  return (
    <Paper>
        <BottomNavigation showLabels>
      <BottomNavigationAction label="About" icon={<Info/>}/>
      <BottomNavigationAction label="Favorites" icon={<HeartBroken/>}/>
      <BottomNavigationAction label="My Cards" icon={<Portrait/>}/>
        </BottomNavigation>
  
    </Paper>
  )
}

export default Footer