import { getCartItems, getTotalPrice } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const BackToCart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [topButton, setTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let cartBlockHeight = document.querySelector('.cartBlock').clientHeight;
            if (window.scrollY > cartBlockHeight) {
                setTopButton(true)
            } else {
                setTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return(<div>
        {topButton && (
            <div className="main">
                    <span tooltip="Перейти в корзину" flow="down">
                        <button onClick={scrollUp} className="backToCartBtn">
                            <img className="backToCartImg" src="./cart-loaded.png" alt="backToCartBtn"></img>
                            <p className="backToCartTotalPrice">{cartItems.length > 0 ? totalPrice + ' руб.': null} </p>
                        </button> 
                    </span>
            </div>
        )}
    </div>)
}