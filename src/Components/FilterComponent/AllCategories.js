import { Filter } from "./Filter"

export const AllCategories = () => {
    return(<div className="allTheCategories">
        {['ВСЕ', 'ФРУКТЫ', 'СЛАДОСТИ', 'МОЛОЧНЫЕ ПРОДУКТЫ', 'ХЛЕБ']
        .map((category, index) =>  <Filter key={index} category={category}/>)
        }
    </div>)
}