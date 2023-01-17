import { Grid, Typography } from '@mui/material'
import React from 'react'
import CardComponent from './card/Card'
import { arrayOf } from 'prop-types'
import cardType from '../models/types/cardType'

const CardsComponent = ({cards}) => {


    const handleCardDelete = (bizNumber) => {
        console.log(`You Deleted Card Number - ${bizNumber}`);
    }

    const handleCardLike = (bizNumber) => {
        console.log(`You Liked Card Number - ${bizNumber}`);
    }

    const handleCardEdit = (bizNumber) => {
        console.log(`You Edit Card Number - ${bizNumber}`);
    }

    if(!cards.length) return (
        <Typography>Oops.. it seems there are no business cards to display.</Typography>
    )

    return (
        <Grid container spacing={2} direction="row" justifyContent="space-between">
            {cards.map((card) => (
                    <Grid item xs={12} md={6} xl={4} key={card._id}>
                        <CardComponent card={card} onDeleteClick={handleCardDelete} onLikeClick={handleCardLike} onEditClick={handleCardEdit}/>
                    </Grid>
                )
            )}
        </Grid>
    );
}

CardsComponent.propTypes = {
    cards:arrayOf(cardType)
}

export default CardsComponent