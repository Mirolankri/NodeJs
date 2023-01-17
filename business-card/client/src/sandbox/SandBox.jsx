import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavItem from '../routes/NavItem'
import { Outlet } from 'react-router-dom'

function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to='logic' label='Logic' sx={{ color: '#333' }}/>
          <NavItem to='life-cycle' label='Life Cycle Hooks' sx={{ color: '#333' }}/>
          <NavItem to='custom-counter-hook' label='Custom Counter Hook' sx={{ color: '#333' }}/>
          <NavItem to='custom-name-hook' label='Custom Name Hook' sx={{ color: '#333' }}/>
        </Toolbar>
      </AppBar>

      <Outlet/>
    </div>
  )
}

export default SandBox