export const ChangeQuantity = ({quantity, setQuantity}) => {
    const increaseQuantity = () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
    }
    const reduceQuantity = () => {
        if  (quantity <= 1) return false;
        else {const newQuantity = quantity -1;
        setQuantity(newQuantity);
    }}

    return(
        <div className="quantityBlock">
                <img onClick={reduceQuantity} className="counterBtn" src="minus.png" alt="minus"/>
                <p className="quantity">{quantity}</p>
                <img onClick={increaseQuantity} className="counterBtn" src="plus.png" alt="plus"/>
            </div>
    )
}