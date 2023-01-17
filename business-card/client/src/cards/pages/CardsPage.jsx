import { Container } from '@mui/material'
import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'

const CardsPage = () => {
    const { cards, isPending, error, handleGetCards } = useCards()

    useEffect(() => {
        handleGetCards()
    }, [])

    return (
        <Container>
            <PageHeader title='Cards' subtitle='Here you can find business cards from all categories'/>

            <CardsFeedback isPending={isPending} error={error} cards={cards} />
        </Container>
    )
}

export default CardsPage