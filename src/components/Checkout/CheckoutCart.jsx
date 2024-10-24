import React from "react";
import { titleOrders } from "../../constans/constant";
import styles from "./Checkout.module.css";
import { roundNumber, shortText } from "../../utils/helper";
import { HiMinusSm, HiOutlineTrash, HiPlusSm } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementNumberCart,
  incrementNumberCart,
  removeCart,
} from "../../features/cartSlice";

function CheckoutCart() {
  const { carts } = useSelector((state) => state.carts);

  return (
    <div className={styles.cartsContainer}>
      <ul className={styles.titleList}>
        {titleOrders.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {!carts.length ? (
        <div className={styles.imgContainer}>
          <img
            className="notProductImage"
            src="../../public/images/shop.png"
            alt="shop image"
          />
        </div>
      ) : (
        <ul className={styles.cartsList}>
          {carts.map((item) => (
            <Cart key={item.id} cart={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CheckoutCart;

function Cart({ cart }) {
  const dispatch = useDispatch();
  const { image, title, price, quantity, id } = cart;

  return (
    <li>
      <NavLink to={`/products/${id}`} className={styles.cartImage}>
        <img src={image} alt="" />
      </NavLink>
      <div className={styles.cartInfo}>
        <p>{shortText(title)}</p>
        <p>${price}</p>
        <div className={styles.buttons}>
          <button
            onClick={() =>
              quantity === 1 ? "" : dispatch(decrementNumberCart(cart))
            }
          >
            <HiMinusSm />
          </button>
          <span className={styles.countItems}>{quantity}</span>
          <button
            onClick={() => {
              dispatch(incrementNumberCart(cart));
            }}
          >
            <HiPlusSm />
          </button>
        </div>
        <p className={styles.totalPrice}>{roundNumber(quantity * price)}</p>
        <button
          className={styles.deleteBtn}
          onClick={() => {
            dispatch(removeCart(+cart.id));
          }}
        >
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
}
