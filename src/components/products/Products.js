import "./products.css"
//  import Products from './components/products/Products.js';
import Product from '../product/Product';

const Products = ({products}) =>{
    return(
        <section className="products">
            {
            products.map((product)=>(
            <Product 
                key={product.id}
                product={product}
                title={product.title}
                price={product.price}
                image={product.image}
            />
         )   )}
        </section>
    )
}
export default Products;