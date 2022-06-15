// import ShowBtn from "../components/BtnText/ShowBtn"
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Cart from '../components/cart/Cart';
import { useEffect, useState } from 'react';
import TodoConntext from '../contexts/TodoConntext';
// import Cart from './components/cart/Cart';
export default function Home(){

    const [isLoding, setIsLoding] = useState(true)
    const [originalproducts, setOriginalProducts] = useState([])
    const [products, setProducts] = useState([])
    const [productsAraay, setProductsAraay] = useState([])
    const [count, setCount] = useState(0)
    // const dotoList = useRef(products)
    useEffect(() => {
      fetchProducts()
    }, []
    )
    
    const fetchProducts = () => {
      setIsLoding(true)
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((todoList) => {
        setOriginalProducts(todoList);
        setProducts(todoList);
        setIsLoding(false)
      })
      ;
    }
    function addToCart(id) {
      const add =productsAraay.find(p=>p.id===id)
      if (add) {
        setProductsAraay(productsAraay.map(x=>x.id===id?{...add,qty:add.qty+1}:x)
        )}
        else{
          const addNew=originalproducts.find(x=>x.id===id)
        setProductsAraay([...productsAraay,{...addNew,qty:1}]) 
      };
      
    }
    function removeCart(id) {
      const newTodos = productsAraay.filter((p) => p.id !== id);
      setProductsAraay(newTodos);
    }
    
    const categories = originalproducts.map(p => p.category)
    
    .filter((value, index, array) =>
    array.indexOf(value) === index
    );
    // console.log(categories);
    // console.log(products);
    
      const filter = (category) => {
        let newProducts = originalproducts.filter((e) =>
          category === "all" ? true : category === e.category)
        setProducts(newProducts)
      }
return <TodoConntext.Provider value={{count,setCount, products, productsAraay,addToCart,removeCart,isLoding
}}>     
<Cart />
{/* <ShowBtn/> */}
<Header   categories={categories} filter={filter} ShowAgin={fetchProducts} />
<Products  products={products} />
</TodoConntext.Provider>


}