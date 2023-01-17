import React from 'react'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Deletelcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import CallIcon from '@mui/icons-material/Call'
import { func, string } from 'prop-types'

const CardActionBar = ({cardId, handleDeleteCard, handleLikeCard}) => {
    return (
        <CardActions disableSpacing sx={{ paddingTop:0, justifyContent: 'space-between' }} >
            <Box>
                <IconButton aria-label='Delete Card' onClick={() => handleDeleteCard(cardId)}>
                    <Deletelcon />
                </IconButton>
                <IconButton aria-label='Edit Card' onClick={() => console.log(`You Edited Card Number - ${cardId}`)}>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton aria-label='Call to Business'>
                    <CallIcon />
                </IconButton>
                <IconButton aria-label='Add to favorites' onClick={() => handleLikeCard(cardId)}>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    )
}

CardActionBar.propTypes = {
    cardId: string.isRequired,
    handleDeleteCard: func.isRequired,
    handleLikeCard: func.isRequired
}

export default CardActionBar