import "./Header.css"
import Slider from "../Slider/Slider"
// import ProductsArray from "../ProductsArray/ProductsArray";
// import Products from "../Products/Products";
// import TodoConntext from '../../contexts/TodoConntext';
// import { useContext } from "react";

// const [ProductsArray, setProducts] = useState(products);

const Header = ({ categories, filter, ShowAgin }) => {
  // const [priceValue]=useContext(TodoConntext)
  return(
  <nav className="product-filter">
    <h1>Jackets</h1>

    <div className="sort">
      <div className="collection-sort">
        <label>Filter by:</label>
        <select
          className="category"
          onChange={(event) => filter(event.target.value)}>
          <option value="all">All products</option>
          {
            categories.map((category) => {
              return <option key={category} value={category} >{category}</option>
            })
          }

        </select>

          <button onClick={ShowAgin}> feach agin</button>

      </div>


      <div className="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
<div>

<Slider
        getAriaLabel={() => 'Temperature range'}
        // value={value}
        // max={priceValue[0]}
        // min={priceValue[priceValue.length-1]}
        // onChange={handleChange}
        // valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
    
      /> 
 
</div>
  </nav >
)}


export default Header;
