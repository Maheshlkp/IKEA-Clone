import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-container">
        <h1 className="cart-title">Shopping cart</h1>
        <button className="btn-checkout">Continue to checkout</button>

        <div className="cart-product-list">
          <div className="cart-product-container">
            <img src="#" alt="img" className="cart-product-image" />
            <h4 className="cart-product-title">Title</h4>
            <span className="cart-prodcut-price">Price</span>
            <span className="cart-product-description">Description</span>
            <div className="cart-product-action">
              <span className="cart-product-action-quantity">quantity</span>
              <span className="cart-product-action-remove">remove</span>
            </div>
          </div>
        </div>

        <div className="cart-summary">Order summary</div>
        <button className="btn-checkout">Continue to checkout</button>

        <div className="cart-footer">
          <p>365 days to change your mind</p>
          <p>Secure shopping with SSL data encryption</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;