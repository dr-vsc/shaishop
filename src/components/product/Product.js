
import "./Product.css"
// import Product from './components/product/Product';
import TodoConntext from "../../contexts/TodoConntext"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Buttons } from "../cart/Buttons";
const Product = ({image,title,price,id}) => {
    const {addToCart,removeCart, setCount,count}=useContext(TodoConntext);
    const [ quantity, setQuantity ] = useState(0);

    const handleIncrease = () =>{
    //    productsAraay.find(x=>x.id===id)
        // updates the global state
        addToCart(id);
        //updates the local state
        setQuantity(quantity + 1)
        setCount(count+1)
    }
    const handleDecrease = () =>{
        //    productsAraay.find(x=>x.id===id)
        // updates the global state
        removeCart(id);
        //updates the local state
        setQuantity(quantity - 1)
        setCount(count-1)
    }

    return (
    <div key={id} className="product-card">
      <Link to={`/products/${id}`} >
        <div className="product-image">
            <img alt={"alt"} src={image}/>
        </div>
            </Link>
        <div className="product-info">
            <h5>{title}</h5>
            <h6>{price}</h6>
            
        <button onClick={()=>handleDecrease} >-</button>
            <p>{quantity}</p>
        <button onClick={handleIncrease} >+</button>
        </div>
        {/* <button key={id} onClick={()=>handleDecrease(id)}>-</button> */}
  
           
    
    </div>
    )
}

export default Product;