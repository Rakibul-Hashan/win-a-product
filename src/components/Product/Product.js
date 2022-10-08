import React from 'react';
import { GrSelect } from 'react-icons/gr';
import './Product.css';
const Product = ({ product, selectHandler }) => {
    const { title, price, description, category, image } = product;
    // console.log('from product component', product)
    return (
        <div className="product-card">
            <div className="badge">{category}</div>
            <div className="product-tumb" >
                <img src={image} alt={title} />
            </div>
            <div className="product-details">
                <span className="product-catagory">{category}</span>
                <h4><a href="">{title.slice(0, 30) + '...'}</a></h4>
                <p>{description.slice(0, 100)}</p>
                <div className="product-bottom-details">
                    <div className="product-price">${price}</div>
                    <button type='button' id='product-button' className="product-button" onClick={() => selectHandler(product)}>
                        <span>Select Product</span> <GrSelect className='icon' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;