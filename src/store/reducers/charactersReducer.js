import {
    GET_CHARACTERS,
    GET_DETAILS
} from '../action'

const initialState = {
    characters: [],
    details: {}
}

export default function reducers(state = initialState, action) {
    const {
        type,
        payload
    } = action
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload
            }
        case GET_DETAILS:
            return {
                ...state,
                details: payload
            }
        default:
            return state
    }

}