import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"
import { EveryCartItem } from "./EveryCartItem"

export const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return( <div>
        <span className="cartHeader">
            <div className="cartParent">
                <img className="cartImg" src={cartItems.length > 0 ? "./cart-loaded.png" : "./cart-empty.png"} alt="cart"/>
                <span className={cartItems.length > 0 ? "cartLength" : null}>{cartItems.length > 0 ? cartItems.length : null}</span>
            </div>
            <h1>Корзина</h1>
        </span>

        {cartItems.length > 0 ?  <h4 className="total">Сумма заказа: {totalPrice} руб.</h4> : <p>В корзине пока пусто</p>}
        {cartItems.map((cartItem, itemId) => <EveryCartItem key={itemId}cartItem={cartItem} />)}
    </div>)
}
