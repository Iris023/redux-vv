import { ChangeQuantity } from "../CartComponent/ChangeQuantity"
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export const EachProduct = ({eachProduct}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItemToCart({eachProduct, quantity}));
        // ПОД ВОПРОСОМ? если убрать - то можно dispatch написать прям на кнопке onClick () => {dispatch(...)}
        setQuantity(1);
    }

    return(
        <div className="productBlock">
            <h4>{eachProduct.name}</h4>
            <p className="serving">{eachProduct.serving}</p>
            <div className="imageBlock">
                <img className="productImage" src={`./${eachProduct.img}.jpeg`} alt="productImage"/>
            </div>
            <p className="productPrice">{eachProduct.price} руб.</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={addToCart} className="addToCartBtn">Добавить в корзину</button>
        </div>
    )
}