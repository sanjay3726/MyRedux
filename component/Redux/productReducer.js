import { ADD_TO_CART, REMOVE_TO_CART } from './constants';
const initialState = []

export const productReducer = (state = initialState, productAction) => {
    switch (productAction.type) {
        case ADD_TO_CART:
            return [
                ...state,
                productAction.data,
            ]
        case REMOVE_TO_CART:
            let result = state.filter((item) => item.id !== productAction.data.id);
            return [...result]
        default:
            return state

    }
}