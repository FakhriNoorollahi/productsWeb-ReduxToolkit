import React from "react";
import styles from "./Checkout.module.css";
import { countCarts, roundNumber } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarts } from "../../features/cartSlice";

function CheckoutOrder() {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const totalPrice = carts.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

  console.log(carts);

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
      <button
        className={styles.orderBtn}
        onClick={() => dispatch(deleteCarts())}
        disabled={carts.length === 0 ? true : false}
      >
        CHECKOUT NOW
      </button>
    </div>
  );
}

export default CheckoutOrder;
