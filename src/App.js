import './App.css';
import { AllCategories } from './Components/FilterComponent/AllCategories';
import { Cart } from './Components/CartComponent/Cart';
import { Products } from './Components/ProductsComponent/Products';

function App() {
  return (
    <div className="App">    
      <div className="filterBlock">            
        <AllCategories />
      </div>   
      <div className="content">    
          <div className="allProductsBlock">
            <Products />
          </div>
          <div className="cartBlock">
            <Cart />
          </div>
        </div>
    </div>
  );
}

export default App;
