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
  const [priceValue, setpriceValue] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [val, setVal] = useState([100,600]);

  useEffect(() => {
    fetchProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []
  )

  const fetchProducts = () => {
    setIsLoding(true)
    setErr(false)
    fetch("https://bedecked-stone-turret.glitch.me/products")
      .then((res) => res.json())
      .then((todoList) => {
        setOriginalProducts(todoList);
        setProducts(todoList);
        setpriceValue(todoList)
        filterprice(todoList)
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

  const categories = originalproducts.map(p => p.category)

    .filter((value, index, array) =>
      array.indexOf(value) === index
    );


  const filter = (category) => {
    let newProducts = originalproducts.filter((e) =>
      category === "all" ? true : category === e.category)
    setProducts(newProducts)
  }
        const filterSlider = (filterSlider) => {

       const sortPrices=filterSlider.sort((a,b)=>{
         if(a.price > b.price){
           return -1;
          }else if(a.price <b.price){
            return 1;
          }else{return 0;}
        } )
    setpriceValue([sortPrices[0],sortPrices[sortPrices.length-1]])
   
  }  
  useEffect(()=>console.log(priceValue),[priceValue])
  const filterprice = (todoList) => {
    const minMax=todoList.map((product)=>product.price).sort((a,b)=>{
      if(a< b){ return -1 }
      else if(a > b){ return 1}
      else{return 0}
    } )
    setVal([minMax[0],minMax[minMax.length-1]])
  }  
  console.log(val,priceValue);
  useEffect(()=>console.log(val),[val])

  return <TodoConntext.Provider value={{
    products: products,
    removeCart: removeCart,
    productsCart: productsCart,
    isLoding: isLoding,
    addToCart: addToCart,
    filterSlider:filterSlider,
    priceValue:priceValue,
 val:val
    // price:value,


  }}>
    <><Cart key={id} />
      <Header categories={categories} filterSlider={filterSlider}

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

