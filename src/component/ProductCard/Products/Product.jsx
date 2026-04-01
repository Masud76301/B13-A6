
import { use } from 'react';
import Card from './Card';

const Product = ({ productData , cart, setCart }) => {
    const products = use(productData);
    return (
        <div className='grid md:grid-cols-3 gap-10 '>

            {

                products.map(product => <Card key={product.id} product ={product} cart={cart} setCart={setCart}></Card>)
            }
        </div>


    );
};

export default Product;