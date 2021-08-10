import {
    GET_FAVORITES
} from '../action'

const initialState = {
    favorites: []
}

export default function reducers(state = initialState, action) {
    const {
        type,
        payload
    } = action
    switch (type) {
        case GET_FAVORITES:
            return {
                ...state,
                // favorites: state.favorites.concat(payload)
                favorites: [...state.favorites, payload]
            }
        default:
            return state
    }

}