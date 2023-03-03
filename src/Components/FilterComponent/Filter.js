import { useDispatch, useSelector } from "react-redux"
import { filterCategory, getSelectedCategory } from "../../redux/productsSlice"

export const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(
        <div>
            <p className={selectedCategory === category ? "categoryButton categoryButtonSelected" : "categoryButton"}
                onClick={() => {dispatch(filterCategory(category))}}>{category}</p>
        </div>
    )
}