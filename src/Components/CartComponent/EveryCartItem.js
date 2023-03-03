import { useDispatch } from "react-redux";
import { dataProducts } from "../../data/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";

export const EveryCartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const product = dataProducts.find(item => item.id === cartItem.itemId)
    return(
        <div className="cartItemBlock">
            <h6 className="cartItemName">{product.name} ({product.serving})</h6>
            <p className="cartItemText">{cartItem.itemQuantity}</p>
            <p className="cartItemText cartItemPrice">{product.price * cartItem.itemQuantity} руб</p>
            <span onClick={() => dispatch(removeItemFromCart({productId : cartItem.id}))}>
                <img className="deleteBtn" src="del.png" alt="delete"/>
            </span>
        </div>
    )
}