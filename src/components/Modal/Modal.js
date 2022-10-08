import React from "react";
import "./Modal.css";
function Modal({ closeModal, randomProduct }) {
  console.log(randomProduct)
  if(!randomProduct){
    randomProduct = {
      title: 'No Product to Show'
    }
  }
  const heading = 'Please Choose Some Products';
  const congHeading = 'Congratulations!! You have won this product!!';
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
          <h1>{(!randomProduct)? heading:congHeading}</h1>
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
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;