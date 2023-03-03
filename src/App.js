import './App.css';
import { AllCategories } from './Components/FilterComponent/AllCategories';
import { Cart } from './Components/CartComponent/Cart';
import { Products } from './Components/ProductsComponent/Products';
// import { BackToCart } from './Components/BackToCart';
import { BackToCartCopy } from './Components/BackToCart copy';


import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 


function App() {
  const ref = useRef(null);

  useEffect(() => { 
    const element = ref.current;
    let cartBlockHeight = document.querySelector(".cartBlock").offsetHeight;
    gsap.fromTo(
      element.querySelector("#gsapTarget"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        scrollTrigger: {
          trigger: element.querySelector(".cartBlock"),
          start: "bottom 10",
          end: () => `+=${cartBlockHeight}`,
          scrub: true
        }
      }
    );
  }, []);


  return (
    <div className="App" ref={ref}>    
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
      <div >
        {/* <BackToCart /> */}
        <BackToCartCopy />
      </div>
    </div>
  )
  }
export default App;
