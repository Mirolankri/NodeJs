import { Grid } from '@mui/material'
import { arrayOf } from 'prop-types';
import React from 'react'
import cardType from '../models/types/cardType';
import CardComponent from './card/Card'

const CardsComponent = ({cards}) => {
    const handleDeleteCard = (cardId) => console.log(`You Deleted Card Number - ${cardId}`);
    const handleLikeCard = (cardId) => console.log(`You Liked Card Number - ${cardId}`);

    return (
        <Grid container spacing={2} direction="row" justifyContent="space-between">
            {cards.map((card) => (
                    <Grid item xs={12} md={6} xl={4} key={card._id}>
                        <CardComponent card={card} handleDeleteCard={handleDeleteCard} handleLikeCard={handleLikeCard}/>
                    </Grid>
                )
            )}
        </Grid>
    );
}

CardsComponent.propTypes = {
    cards: arrayOf(cardType).isRequired
}

export default CardsComponent