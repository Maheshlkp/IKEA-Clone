import React from "react";
import "./Order.css";
import { getCartTotal, getQty, getQtyTotal } from "../reducer";
import Subtotal from "./_Subtotal";

function Order({ cart, order }) {
  return (
    <div className="order">
      {cart?.map((item, i) => (
        <div className="order-items-container" key={i}>
          <img className="order-item-img" src={item.image} alt={item.image} />
          <div className="order-item-title">
            <span>{getQty(cart, item.pid)}</span> x <span>{item.title}</span>
            <small>(${item.price}/EA)</small>
          </div>
          <div className="order-item-description">{item.description}</div>
        </div>
      ))}

      <div className="order-subtotal">
        <span>Subtotal ({getQtyTotal(cart)} items)</span>
        <span>
          <Subtotal getTotal={getCartTotal} cart={cart} />
        </span>
      </div>
    </div>
  );
}

export default Order;
