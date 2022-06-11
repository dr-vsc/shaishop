import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

import { useEffect, useState } from 'react';
import ShowBtn from './components/BtnText/ShowBtn';


function App() {
  const [originalproducts, setOriginalProducts] = useState([])
  const [products, setProducts] = useState([])
  // const dotoList = useRef(products)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((todoList) => { setOriginalProducts(todoList);
       setProducts(todoList) })
  }, []
  )

  const categories = originalproducts.map(p => p.category)
    .filter((value, index, array) =>
      array.indexOf(value) === index
    );
  console.log(products);

  const filter = (category) => {
    let newProducts = originalproducts.filter((e) =>
      category === "all" ? true : category === e.category)
    setProducts(newProducts)
  }
  return (



    <>
      <ShowBtn />
      <Header categories={categories} filter={filter} />
      <Products products={products} />
    </>
  );
}



export default App;

