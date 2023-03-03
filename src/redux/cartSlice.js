import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();
            let alreadyInCart = state.cartItems.find(el => el.itemId === action.payload.eachProduct.id);
            
            if (alreadyInCart) {
                alreadyInCart.itemQuantity += action.payload.quantity;
                alreadyInCart.totalPrice = action.payload.eachProduct.price * alreadyInCart.itemQuantity
            } else {
                state.cartItems.push({
                    id: timeId,
                    itemId: action.payload.eachProduct.id,
                    itemQuantity: action.payload.quantity,
                    totalPrice: action.payload.quantity * action.payload.eachProduct.price
                })
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.productId
            )
        }
    }
})

export const getCartItems = state => state.cart.cartItems;

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;