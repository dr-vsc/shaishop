import "./Products.css"
//  import Products from './components/products/Products.js';
import Product from '../Product/Product';
import Loader from "../Loader/Loader";
// const productsdata = useRef(product)

const Products = ({ products }) => {
    return (
        <section className="products">
            {products.length > 0 ?
                products.map((product) => {
                    return <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                })
                : <Loader />}
        </section>
    )
}
export default Products;