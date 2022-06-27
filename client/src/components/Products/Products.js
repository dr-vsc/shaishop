import "./Products.css"
//  import Products from './components/products/Products.js';
import Product from '../Product/Product';
// const productsdata = useRef(product)

const Products = ({ products }) => {
    return (
        <section className="products">
            {
                products.map((product) => {
                    return (
                        <Product className="product-card"
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            qty={0 ?? product.qty}

                        />
                    )
                }
                )
            }
        </section>
    )
}
export default Products;