import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Prodotto</p>
        <p>Titolo</p>
        <p>Prezzo</p>
        <p>Quantità</p>
        <p>Totale</p>
        <p>Rimuovi</p>
      </div>
      <hr />
      {products.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format-main cartitems-format">
                      <img className="cartitems-product-icon" src={backend_url+e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>{currency}{e.new_price}</p>
                      <button className="cartitems-quantity">{cartItems[e.id]}</button>
                      <p>{currency}{e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Totale Carrello</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotale</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Spese di spedizione</p>
              <p>Gratis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Totale</h3>
              <h3>{currency}{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>Se hai un codice promozionale, inseriscilo qui</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Inserisci</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
