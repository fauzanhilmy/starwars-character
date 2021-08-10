import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
// import reducers from './reducer'

import searchReducer from './reducers/searchReducer'
import charactersReducer from './reducers/charactersReducer'
import favoriteReducer from './reducers/favoriteReducer'
import reduxThunk from 'redux-thunk'

const reducers = combineReducers({
    charactersReducer,
    favoriteReducer,
    searchReducer
})
const store = createStore(reducers,
    applyMiddleware(reduxThunk))
export default store