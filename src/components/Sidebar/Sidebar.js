import React from 'react';
import SidebarProducts from '../SidebarPorducts/SidebarProducts';
import './Sidebar.css';
const Sidebar = ({ sidebarProducts, spinHandler, randomProduct, setOpenModal, openModal,spinAgain,deleteProduct}) => {
    return (
        <aside>
            {
                sidebarProducts.map(product =>
                    <SidebarProducts
                        key={product.id}
                        product={product}
                        deleteProduct={deleteProduct}
                        sidebarProducts={sidebarProducts}
                    ></SidebarProducts>
                )
            }
            <div className="spin">

                {/* Modal */}
                <button className="openModalBtn" onClick={() => {
                    setOpenModal(true);
                    spinHandler(sidebarProducts)
                }}>Open</button>

                <button className='spin-again'
                    onClick={() => spinAgain()}
                >Clear</button>
            </div>
        </aside>
    );
};

export default Sidebar;