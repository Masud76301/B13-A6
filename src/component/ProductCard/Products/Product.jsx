
import { use } from 'react';
import Card from './Card';

const Product = ({ productData }) => {
    const products = use(productData);
    return (
        <div className='grid md:grid-cols-3 gap-10 '>

            {

                products.map(product => <Card key={product.id} product ={product}></Card>)
            }
        </div>


    );
};

export default Product;