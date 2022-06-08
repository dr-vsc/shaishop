import "./Products.css"
//  import Products from './components/products/Products.js';
import Product from '../Product/Product';

const Products = ({products}) =>{
    return(
        <section className="products">
            {
            products.map((product) =>{
           return <Product  key={product.id} id={product.id} title={ product.title} price={product.price} image={product.image}
            />
              }  )}
        </section>
    )
}
export default Products;