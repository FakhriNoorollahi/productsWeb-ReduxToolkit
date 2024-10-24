import React from "react";
import styles from "./Checkout.module.css";
import { countCarts, roundNumber } from "../../utils/helper";
import { useSelector } from "react-redux";

function CheckoutOrder() {
  const { carts } = useSelector((state) => state.carts);

  const totalPrice = carts.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  return (
    <div className={styles.order}>
      <h4>ORDER SUMMARY</h4>
      <div className={styles.summary}>
        <div className={styles.countItems}>
          <p>Total Items</p>
          <p>{countCarts(carts)}</p>
        </div>
        <div className={styles.totalPrice}>
          <p>Total Price</p>
          <p>$ {roundNumber(totalPrice)}</p>
        </div>
      </div>
      <button className={styles.orderBtn}>CHECKOUT NOW</button>
    </div>
  );
}

export default CheckoutOrder;
