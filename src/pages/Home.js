/* eslint-disable no-undef */
/* eslint-disable no-sequences */
// import ShowBtn from "../components/BtnText/ShowBtn"
import { useEffect, useState } from 'react';
import Cart from '../components/cart/Cart';
import Products from '../components/Products/Products';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import TodoConntext from '../contexts/TodoConntext';
import { useParams } from 'react-router-dom';

// import Cart from './components/cart/Cart';
export default function Home() {
  const { id } = useParams();
  // const [ quantity, setQuantity ] = useState(0);
  const [isLoding, setIsLoding] = useState(true)
  const [err, setErr] = useState(false)
  const [originalproducts, setOriginalProducts] = useState([])
  const [products, setProducts] = useState([])
  const [productsCart, setProductsCart, count] = useState([])


  useEffect(() => {
    fetchProducts()
  }, [],
  )

  const fetchProducts = () => {
    setIsLoding(true)
    setErr(false)
    fetch("https://bedecked-stone-turret.glitch.me/products")
      .then((res) => res.json())
      .then((todoList) => {
        setOriginalProducts(todoList);
        setProducts(todoList);
        // setProductsCart(todoList);
        setIsLoding(false)
      })
      .catch(function () {
        return setErr(true),
          setIsLoding(false)
      });
  };

  function addToCart(id) {
    const add = productsCart.find(p => p.id === id)
    if (add) {
      setProductsCart(productsCart.map(x => x.id === id ? { ...add, qty: add.qty + 1 } : x)
      )}
    else {
      const addNew = originalproducts.find(x => x.id === id)
      setProductsCart([...productsCart, { ...addNew, qty: 1 }])
    }}

  function removeCart(id) {
    const remove = productsCart.findIndex(p => p.id === id)
    if (remove.qty > 1) {
      setProductsCart(productsCart.map((x) => x.id === id ? { ...remove, qty: x.qty - 1 } : x),
      )
    }
    else {
      const removeNew = productsCart.filter(x => x.id !== id)
      setProductsCart(removeNew)
    };
    console.log(productsCart)

  }
  // const handleIncrease = () =>{
  //   //    productsAraay.find(x=>x.id===id)
  //       // updates the global state
  //       AddToCart(id);
  //       //updates the local state
  //       setQuantity(quantity + 1)
  //       // setCount(count+1)
  //   }
  //   const handleDecrease = () =>{
  //       //    productsAraay.find(x=>x.id===id)
  //       // updates the global state
  //       RemoveCart(id);
  //       //updates the local state
  //       setQuantity(quantity - 1)
  //       // setCount(count-1)
  //   }
  const categories = originalproducts.map(p => p.category)

    .filter((value, index, array) =>
      array.indexOf(value) === index
    );


  const filter = (category) => {
    let newProducts = originalproducts.filter((e) =>
      category === "all" ? true : category === e.category)
    setProducts(newProducts)
  }
  //       const filterSlider = (price) => {
  //      const sortPrices=price.sort(function(a,b){
  // if(a.price>b.price){
  //   return 1;
  // }else if(a.price<b.price){
  //   return -1;
  // }else{return 0;}
  //  } )
  // const extremePrices= [sortPrices[0],sortPrices[sortPrices.length-1]]
  // return extremePrices;}

  return <TodoConntext.Provider value={{
    products: products,
    // AddToCart:AddToCart,
    removeCart: removeCart,
    productsCart: productsCart,
    isLoding: isLoding,
    addToCart: addToCart,
    count: count,
    // filterSlider:filterSlider,
    // leastExpensiveObj:leastExpensiveObj,
    // mostEXpensiveObj:mostEXpensiveObj,
    // price:value,


  }}>
    <><Cart key={id} />
      <Header categories={categories}

        filter={filter} ShowAgin={fetchProducts}
      />
      {err && (
        <h2>error server</h2>
      )}
      {isLoding ? <Loader /> :
        <Products products={products} />
      }</>
  </TodoConntext.Provider>


}