import { useState } from 'react'
import { getCards, getMyCards, createCard, editCard, deleteCard, changeLikeStatus } from '../services/cardApiService'
import useAxios from '../../hooks/useAxios'

const useCards = () => {
    const [cards, setCards] = useState(null)
    const [card, setCard] = useState(null)
    const [isPending, setPending] = useState(false)
    const [error, setError] = useState(null)

    useAxios()

    const requestStatus = (pending, errorMessage, cards, card = null) => {
        setPending(pending)
        setError(errorMessage)
        setCards(cards)
        setCard(card)
        return
    }

    const handleGetCards = async () => {
        try {
            setPending(true)
            const cards = await getCards()
            requestStatus(false, null, cards)
        } catch (error) {
            requestStatus(false, error, null)
        }
    }

    const handleGetMyCards = async () => {
        try {
            setPending(true)
            const cards = await getMyCards()
            requestStatus(false, null, cards)
        } catch (error) {
            requestStatus(false, error, null)
        }
    }

    const handleCreateCard = async (cardFromClients) => {
        try {
            setPending(true)
            const cards = await createCard(cardFromClients)
            requestStatus(false, null, cards)
        } catch (error) {
            requestStatus(false, error, null)
        }
    }

    const handleUpdateCard = async (cardFromClients) => {
        try {
            setPending(true)
            const cards = await editCard(cardFromClients)
            requestStatus(false, null, cards)
        } catch (error) {
            requestStatus(false, error, null)
        }
    }

    const handleDeleteCard = async (cardId) => {
        try {
            setPending(true)
            const cards = await deleteCard(cardId)
            requestStatus(false, null, cards)
        } catch (error) {
            requestStatus(false, error, null)
        }
    }

    const handleLikeCard = async (cardId) => {
        try {
            setPending(true)
            const cards = await changeLikeStatus(cardId)
            requestStatus(false, null, cards)
        } catch (error) {
            requestStatus(false, error, null)
        }
    }

    return {cards, isPending, error, handleGetCards, handleGetMyCards, handleCreateCard, handleUpdateCard, handleDeleteCard, handleLikeCard}
}

export default useCards