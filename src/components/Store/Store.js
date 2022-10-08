import React, { useEffect, useState } from 'react';
import { disableBTN } from '../../utilities/utilities';
import Modal from '../Modal/Modal';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [sidebar, setSidebar] = useState([]);
    const [random, setRandom] = useState({});
    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        fetch('products-fakestore-api.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // Add to cart button handler
    const selectHandler = (selectedProduct) => {
        if (sidebar.length === 4) {
            alert('Max 4 products are allowed')
            return
        }
        const exist = sidebar.find(product => selectedProduct.id === product.id);
        if (exist) {
            alert('you are not allowed to add the same product')
            disableBTN(exist)
            return
        }
        const newSidebar = [...sidebar, selectedProduct];
        setSidebar(newSidebar)
        return newSidebar;


    }

    const spinHandler = (sidebarProducts) => {
        // Choose random product
        const randomProduct = sidebarProducts[Math.floor(Math.random() * sidebarProducts.length)];
        console.log('RANDOM PRODUCT', randomProduct)
        setRandom(randomProduct);

    }
    
    return (
        <div className="store-container">
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            selectHandler={selectHandler}
                        ></Product>)
                }
            </div>
            <div className="sidebar-container">
                <Sidebar
                    sidebarProducts={sidebar}
                    spinHandler={spinHandler}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                ></Sidebar>


            </div>

            {
                openModal && <Modal
                    closeModal={setOpenModal}
                    randomProduct={random}
                ></Modal>
            }

        </div>
    );
};

export default Store;