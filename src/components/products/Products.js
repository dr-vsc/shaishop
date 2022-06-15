import "./Products.css"
//  import Products from './components/products/Products.js';
import Product from '../Product/Product';
// import { Link } from "react-router-dom";
// import Loader from "../Loader/Loader";
// const productsdata = useRef(product)

const Products = ({ products }) => {
    // const {Product}=useContext   ( )
    return (
        <section className="products">
            {
                products.map((product) => {
                     return(
                        <Product className="product-card"
                         key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        />
                     )
                }
                )
              }
        </section>
    )
}
export default Products;