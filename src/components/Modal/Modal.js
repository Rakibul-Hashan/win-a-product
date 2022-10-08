import React from "react";
import noImage from '../../assets/no-product.jpg';
import "./Modal.css";
function Modal({ closeModal, randomProduct }) {
  console.log('ore vai', randomProduct)
  
  let heading = '';
  if (!randomProduct) {
    randomProduct = {
      title: 'No Product to Show',
      image: noImage
    }
    heading = 'Please Choose Some Products';
  }else{

    heading = 'Congratulations!! You have won this product!!';
  }

  const { title, price, description, category, image } = randomProduct;

  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{heading}</h1>
        </div>
        <div className="body">
          <img src={image} alt="" />
          <p>{title}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;