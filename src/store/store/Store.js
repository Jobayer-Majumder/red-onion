import {createStore} from 'redux'
import userReducer from '../reducers/UserReducer'
// import { user}


const store = createStore(userReducer)


export default store;