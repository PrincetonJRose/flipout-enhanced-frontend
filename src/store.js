import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import cardReducer from './reducers/cardReducer'

const mainReducer = combineReducers({
    users: userReducer,
    cards: cardReducer,
})

export default createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())