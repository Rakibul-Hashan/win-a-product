import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const SidebarProducts = ({product, deleteProduct, sidebarProducts}) => {
    const {id,title, price, description,category, image } = product;
    return (
        <div className='sidebar-single-product' >
            <div><img className='sidebar-product-img' src={image} alt={title} /></div>
            <div>{title}</div>
            <div className='delete-btn' onClick={() => deleteProduct(product, sidebarProducts)}><FaTrashAlt></FaTrashAlt></div>
        </div>
    );
};

export default SidebarProducts;