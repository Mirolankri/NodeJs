import { Container, Grid } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'

const AboutPage = () => {
  return (
    <Container>
        <PageHeader title='About Page' subtitle='About For This Application'></PageHeader>
        <Grid container spacing={2}>
            <Grid item xs={12} md={8} alignSelf="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, perspiciatis. Quo ullam itaque fuga! Expedita minus quas eum possimus earum. Aliquam quos voluptate neque culpa dolorum, eligendi quidem cumque eveniet ullam perspiciatis? Magnam dolorum, sequi reiciendis dolor sint minima, ipsa voluptas vitae accusamus nostrum error debitis vel ea consectetur quidem tenetur velit repudiandae quibusdam? Porro ipsa, fugit assumenda aliquam temporibus excepturi quasi perferendis quam. At adipisci eos quo in ipsam, quidem, eveniet aliquid alias, soluta eaque mollitia assumenda consectetur ipsum facere corporis tempore voluptates cum impedit nesciunt. Rem corrupti error in. Itaque, dolorum. Enim eveniet amet unde harum. In, ullam.
            </Grid>
            <Grid item xs={12} md={4} sx={{display:{md:"flex",xs:"none"},justifyContent:"center"}}>
                <img src='/assets/images/CARD.jpg' alt='image' style={{width:"100%"}}/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default AboutPage