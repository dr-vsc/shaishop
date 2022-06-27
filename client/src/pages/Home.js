/* eslint-disable no-undef */
/* eslint-disable no-sequences */
// import ShowBtn from "../components/BtnText/ShowBtn"
import { useEffect, useState } from 'react';
import Cart from '../components/Card/Card';
import Products from '../components/Products/Products';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import TodoConntext from '../contexts/TodoConntext';
import { useParams } from 'react-router-dom';


export default function Home() {
  const { id } = useParams();
  // const [ quantity, setQuantity ] = useState(0);
  const [isLoding, setIsLoding] = useState(true)
  const [err, setErr] = useState(false)
  const [originalproducts, setOriginalProducts] = useState([])
  const [products, setProducts] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [priceValue, setpriceValue] = useState([1, 1000])
  const [val, setVal] = useState([priceValue[0], priceValue[1]]);
  const [priceFilter, setPriceFilter] = useState([]);

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []
  )

  const fetchProducts = () => {
    setIsLoding(true)
    setErr(false)
    fetch("/api/Products")
      .then((res) => res.json())
      .then((todoList) => {
        setOriginalProducts(todoList);
        setProducts(todoList);
        setpriceValue(todoList)
        minMax(todoList)
        setPriceFilter(todoList)
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
      )
    }
    else {
      const addNew = originalproducts.find(x => x.id === id)
      setProductsCart([...productsCart, { ...addNew, qty: 1 }])
    }
  }

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
    setPriceFilter(newProducts)

  }
  // const filterSlider = (filterSlider) => {
  //   const sortPrices = filterSlider.filter((a) => (
  //     a.price >= val[0] &&
  //     a.price <= val[val.length - 1])
  //   )
  //   console.log(sortPrices);
  // }

  const minMax = (todoList) => {
    const minMax = todoList.map((product) => product.price).sort((a, b) => {
      if (a < b) { return -1 }
      else if (a > b) { return 1 }
      else { return 0 }
    })
    setpriceValue([minMax[0], minMax[minMax.length - 1]])
  }
  function saliderPriceFilter(priceValue) {
    console.log(priceValue);
    const filterPrice = priceFilter.filter((productObg) =>
      productObg.price >= priceValue[0] && productObg.price <= priceValue[1])

    setPriceFilter(filterPrice)

  }
  // useEffect(() => console.log(val), [val])

  return <TodoConntext.Provider value={{
    products: products,
    removeCart: removeCart,
    productsCart: productsCart,
    isLoding: isLoding,
    addToCart: addToCart,
    priceValue: priceValue,
    val: val,
    setVal: setVal,
    saliderPriceFilter: saliderPriceFilter,
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

