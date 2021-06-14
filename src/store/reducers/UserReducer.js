import * as actions from "../actions/actions";


const initialState = {
    state: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.userSignUp:
            return {...state, userData: action.data}
    
        default:
            return state
    }
} 

export default userReducer
// module.exports({
//     userReducer
// })