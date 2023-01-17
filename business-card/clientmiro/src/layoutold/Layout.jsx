import React from 'react'
import {node} from 'prop-types'
import { Box, Container, Grid } from '@mui/material'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Main>{children}</Main>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
    children:node.isRequired
}

export default Layout