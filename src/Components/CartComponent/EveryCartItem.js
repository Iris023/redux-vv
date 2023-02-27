import { dataProducts } from "../../data/dataProducts";

export const EveryCartItem = ({cartItem}) => {
    const product = dataProducts.find(item => item.id === cartItem.itemId)
    return(
        <div className="cartItemBlock">
            <h6 className="cartItemName">{product.name} ({product.serving})</h6>
            <p className="cartItemText">{cartItem.itemQuantity}</p>
            <p className="cartItemText cartItemPrice">{product.price * cartItem.itemQuantity} руб</p>
            <img className="deleteBtn" src="del.png" alt="delete"/>
        </div>
    )
}