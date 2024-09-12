import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import Modal from "../Modal/Modal";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id);
    setIsModalOpen(true);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={backend_url + product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {currency}{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {currency}{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">{product.description}</div>
        <button onClick={handleAddToCart}>Aggiungi al carrello</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message="Prodotto aggiunto al carrello con successo" />
    </div>
  );
};

export default ProductDisplay;
