import Header from './components/header/Header';
import Products from './components/products/Products';
import {data} from './data/Data';
import './App.css';

// const mydata = JSON.parse(data)

function App() {
  return (
    <>
     <Header />
      <Products products={data}/>
    </>
  );
}

 
export default App;
