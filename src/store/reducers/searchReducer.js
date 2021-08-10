import {
    GET_SEARCH
} from '../action'

const initialState = {
    search: ""
}

export default function reducers(state = initialState, action) {
    const {
        type,
        payload
    } = action

    switch (type) {
        case GET_SEARCH:
            return {
                search: payload
            }
        default:
            return state
    }
}