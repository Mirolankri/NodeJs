import React from 'react'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Deletelcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import CallIcon from '@mui/icons-material/Call'
import { func } from 'prop-types'

const CardActionBar = ({onDeleteClick, onLikeClick, onEditClick, bizNumber}) => {
    return (
        <CardActions disableSpacing sx={{ paddingTop:0, justifyContent: 'space-between' }} >
            <Box>
                <IconButton onClick={()=>onDeleteClick(bizNumber)} aria-label='Delete Card'>
                    <Deletelcon />
                </IconButton>
                <IconButton onClick={()=>onEditClick(bizNumber)} aria-label='Edit Card'>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton aria-label='Call to Business'>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={()=>onLikeClick(bizNumber)} aria-label='Add to favorites'>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    )
}

CardActionBar.propTypes = {
    onDeleteClick:func.isRequired,
    onLikeClick:func.isRequired,
    onEditClick:func.isRequired

}
export default CardActionBar