import { Filter } from "./Filter"

export const AllCategories = () => {
    return(<div className="allTheCategories">
        {['ВСЕ', 'ФРУКТЫ', 'СЛАДОСТИ', 'МОЛОЧНЫЕ ПРОДУКТЫ', 'ХЛЕБ']
        .map((category, id) =>  <Filter key={id} category={category}/>)
        }
    </div>)
}