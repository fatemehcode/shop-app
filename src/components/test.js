import { getProduct } from "../services/apiProductById";
import Product from "./shared/Product";
const Testp = (props) => {
    const product={getProduct}
    return ( 
        <Product 
            key={1} 
            productData = {product}
        />);
}
 
export default Testp;