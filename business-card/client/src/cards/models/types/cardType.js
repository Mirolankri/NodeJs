import { arrayOf, number, shape, string } from 'prop-types'
import addressType from './addressType'
import imageType from './imageType'

const CardType = shape({
    _id: string,
    title: string.isRequired,
    subtitle: string.isRequired,
    description: string.isRequired,
    phone: string.isRequired,
    email: string.isRequired,
    web: string.isRequired,
    image: imageType.isRequired,
    address: addressType.isRequired,
    bizNumber: number.isRequired,
    createdAt: string.isRequired,
    user_id: string.isRequired,
    likes: arrayOf(string).isRequired
});

CardType.defaultProps = {
    likes:[],
    web:undefined
}

export default CardType