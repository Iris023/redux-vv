import { useSelector } from "react-redux"
import { getCartItems } from "../../redux/cartSlice"
import { EveryCartItem } from "./EveryCartItem"

export const Cart = () => {
    const cartItems = useSelector(getCartItems);

    return( <div>
        <span className="cartHeader">
            <img className="cartImg" src="./cart-empty.png" alt="cart"/>
            <h1>Корзина</h1>
        </span>
        {cartItems.map((cartItem, itemId) => <EveryCartItem key={itemId}cartItem={cartItem} />)}
    </div>)
}
