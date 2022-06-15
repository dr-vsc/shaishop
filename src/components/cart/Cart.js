import { useContext } from "react";
// import numbersConntext from  "../../contexts/TodoConntext";
import TodoConntext from  "../../contexts/TodoConntext";
// import Product from "../Product/Product";
// import Products from "../Products/Products";


const Cart = () => {
   
     const {count,productsAraay,id,handleDecrease,handleIncrease}=useContext(TodoConntext);
    console.log();
 // const {numbers}=useContext(numbersConntext);
return(
<div key={id} className="sopping">
 {productsAraay.map((Product)=>{
    return (
    <div key={Product.id} className="product-info">
        <img  alt={"alt"} src={Product.image} width={50}/>
        <h5 >{Product.title}</h5>
        <h6 >{Product.price}</h6>
        <button key={id} onClick={handleDecrease} >-</button>
        <p >{count}</p>
        <button key={id} onClick={handleIncrease} >+</button>
</div>

    ) 
        
})}
</div>
)}


export default Cart;