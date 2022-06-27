import { useContext } from "react";
import TodoConntext from "../../contexts/TodoConntext";

const Cart = () => {

    const { productsCart, addToCart, removeCart} = useContext(TodoConntext);
    const handleIncrease = (id) => {
      
        // updates the global state
        addToCart(id);
        //updates the local state
        // setQuantity(quantity + 1)
      
    }
    const handleDecrease = (id) => {
        // updates the global state
        removeCart(id);
        //updates the local state
        
        // setCount(count-1)
    }
    return (
        <div className="sopping">
            {productsCart.map((p) => {
                return (<div key={p.id}>
                    <div className="p-info">
                        <img alt={"alt"} src={p.image} width={50} />
                        <h5>{p.title}</h5>
                        <h6>{p.price}</h6>
                        <p>{p.qty}</p>
                        <button onClick={()=>handleDecrease(p.id)} >Empty a product from the shopping cart
</button>
                        <button onClick={()=>handleIncrease(p.id) } >+</button>
                    </div>
                </div>
                )

            })}
        </div>
    )
}



export default Cart;
