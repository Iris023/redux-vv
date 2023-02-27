import { useSelector } from "react-redux"
import { dataProducts } from "../../data/dataProducts"
import { getSelectedCategory } from "../../redux/productsSlice"
import { EachProduct } from "./EachProduct"

export const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            <h1>Каталог</h1>
            <div className="allProductsBlock">
                {dataProducts
                .filter(eachProduct => { 
                    if (selectedCategory === 'ВСЕ') return true;
                    return selectedCategory === eachProduct.category
                })
                .map(eachProduct =>  
                    <EachProduct eachProduct={eachProduct} key={eachProduct.id}/> )
                }
            </div>
        </div>
    )
}