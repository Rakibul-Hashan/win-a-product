import React from 'react';
import SidebarProducts from '../SidebarPorducts/SidebarProducts';
import './Sidebar.css';
const Sidebar = ({ sidebarProducts, spinHandler, randomProduct, setOpenModal, openModal }) => {
    return (
        <aside>
            {
                sidebarProducts.map(product =>
                    <SidebarProducts
                        key={product.id}
                        product={product}
                    ></SidebarProducts>
                )
            }
            <div className="spin">

                {/* Modal */}
                <button className="openModalBtn" onClick={() => {
                    setOpenModal(true);
                    spinHandler(sidebarProducts)
                }}>Open</button>

                <button className='spin-again'>Clear</button>
            </div>
        </aside>
    );
};

export default Sidebar;