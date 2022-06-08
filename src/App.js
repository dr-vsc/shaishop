import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
// import { productsData } from './data/Data'
import { productsData } from './data/Data'
import { useState } from 'react';
import ShowBtn from './components/BtnText/ShowBtn';


function App() {
  // setProducts1(...products1)
  //  const [productArray,setProducrArray]=useState(Date);
  const categories = productsData.map(p => p.category)
    .filter((value, index, array) =>
      array.indexOf(value) === index
    );
  // setProducts1(categories)
  const [products1, setProducts1] = useState(productsData)
  const filted = (category) => {
    let newProducts = productsData.filter((e) =>
      category === "ALL" ? e : category === e.category)
    setProducts1(newProducts)
  }
  return (



    <>
      <ShowBtn />
      <Header categories={categories} filted={filted} />
      <Products products={products1} />
    </>
  );
}



export default App;

