import { getCartItems, getTotalPrice } from "../redux/cartSlice";
import { useSelector } from "react-redux";

export const BackToCartCopy = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return(<div>
            <div className="main" id="gsapTarget">
                <span tooltip="Перейти в корзину" flow="down">
                    <button onClick={scrollUp} className={cartItems.length > 0 ? "backToCartBtn displayFlex" : "backToCartBn displayNone"}>
                        <img className="backToCartImg" src="./cart-loaded.png" alt="backToCartBtn"></img>
                        <p className="backToCartTotalPrice">{cartItems.length > 0 ? totalPrice + ' руб.': null} </p>
                    </button> 
                </span>
            </div>
    </div>)
}