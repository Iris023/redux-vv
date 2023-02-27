import { ChangeQuantity } from "../CartComponent/ ChangeQuantity"
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export const EachProduct = ({eachProduct}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div className="productBlock">
            <h4>{eachProduct.name}</h4>
            <p className="serving">{eachProduct.serving}</p>
            <div className="imageBlock">
                <img className="productImage" src={`./${eachProduct.img}.jpeg`} alt="productImage"/>
            </div>
            <p>{eachProduct.price} руб.</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch(addItemToCart({eachProduct, quantity}))}} className="addToCartBtn">Добавить в корзину</button>
        </div>
    )
}