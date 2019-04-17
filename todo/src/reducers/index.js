import {combineReducers} from 'redux'
import todoReducer from './addReducer'
import removeReducer from './removeReducer'
import toggleReducer from './toggleReducer'

export default combineReducers({
    todoReducer,
    removeReducer,
    toggleReducer
})