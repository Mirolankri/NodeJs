import { Grid, Typography } from '@mui/material'
import React from 'react'
import CardComponent from './card/Card'

const CardsComponent = () => {
    const cards = [{
        _id: "12",
        "title": "Business Name",
        "subtitle": "Business Headline",
        "description": "some desc",
        "phone": "0500000000",
        "email": "admin@gmail.com",
        "web": "https://www.hackampus.com",
        "image": {
            "url": "/assets/images/Card.jpg",
            "alt": "Business Card image",
            "_id": "639221ec70962dd4df2b709c"
        },
        "address": {
            "state": "israel",
            "country": "israel",
            "city": "Tel Aviv",
            "street": "STREET",
            "houseNumber": 1,
            "zip": 123456,
            "_id": "639221ec70962dd4df2b709d"
        },
        "bizNumber": 6480165,
        "createdAt": "2022-12-08T17:42:04.379Z",
        "user_id": "638503e4caa1f3d9dbbcf7bc",
        "likes": [
            "639221ec70962dd4df2b70a3"
        ],
        "__v": 0
    },
    {
        _id: "13",
        "title": "Business Name",
        "subtitle": "Business Headline",
        "description": "some desc",
        "phone": "0500000000",
        "email": "admin1@gmail.com",
        "web": "https://www.hackampus.com",
        "image": {
            "url": "https://www.istoreil.co.il/media/wysiwyg/2022/main/apple-watch-series-8/series-8_large.png",
            "alt": "Wowww this is Apple Watch",
            "_id": "639221ec70962dd4df2b70a0"
        },
        "address": {
            "state": "israel",
            "country": "israel",
            "city": "Tel Aviv",
            "street": "STREET",
            "houseNumber": 1,
            "zip": 123456,
            "_id": "639221ec70962dd4df2b70a1"
        },
        "bizNumber": 3669552,
        "createdAt": "2022-12-08T17:42:04.379Z",
        "user_id": "638503e4caa1f3d9dbbcf7bc",
        "likes": [],
        "__v": 0
    },{
        _id: "14",
        "title": "Business Name",
        "subtitle": "Business Headline",
        "description": "some desc",
        "phone": "0500000000",
        "email": "admin2@gmail.com",
        "web": "https://www.hackampus.com",
        "image": {
            "url": "https://www.istoreil.co.il/media/wysiwyg/2022/main/apple-watch-series-8/series-8_large.png",
            "alt": "Wowww this is Apple Watch",
            "_id": "639221ec70962dd4df2b70ae"
        },
        "address": {
            "state": "israel",
            "country": "israel",
            "city": "Tel Aviv",
            "street": "STREET",
            "houseNumber": 1,
            "zip": 123456,
            "_id": "639221ec70962dd4df2b70af"
        },
        "bizNumber": 4838162,
        "createdAt": "2022-12-08T17:42:04.379Z",
        "user_id": "638503e4caa1f3d9dbbcf7bc",
        "likes": [],
        "__v": 0
    }]

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


export default CardsComponent