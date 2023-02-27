import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            let alreadyInCart = state.cartItems.find(el => el.itemId === action.payload.eachProduct.id);
            
            if (alreadyInCart) {
                alreadyInCart.itemQuantity += action.payload.quantity

            } else {
                state.cartItems.push({
                    itemId: action.payload.eachProduct.id,
                    itemQuantity: action.payload.quantity
                })
            }
        },
    }
})

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;