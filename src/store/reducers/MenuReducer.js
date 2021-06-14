import * as actions from '../actions/actions'

const initialState = {
    cartData: [], 
};


const MenuReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actions.addToCart:
            const newCartData = action.cartData;
            const prevState = {...state};
            const exist = prevState.cartData?.find(cart => cart.id === newCartData.id)
            if(!exist){
                prevState.cartData = [...prevState.cartData, newCartData]
            }
            return (
                prevState
            )
        default:
            return state
    }
}

export default MenuReducer;
