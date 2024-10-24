import React from "react";
import { NavLink } from "react-router-dom";
import { roundNumber, shortText } from "../../utils/helper";
import styles from "./HomePage.module.css";
import Loader from "../../ui/Loader";

function ProductsList({ products, isLoading }) {
  return (
    <div className={styles.productsList}>
      <ul>
        {isLoading ? (
          <Loader />
        ) : !products.length ? (
          <h3>There are no Products</h3>
        ) : (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductsList;

function Product({ product }) {
  const { id, title, price, image } = product;
  return (
    <li className={styles.productItem}>
      <NavLink to={`/products/${id}`}>
        <div className={styles.producImg}>
          <img src={image} alt="image" />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.title}>{shortText(title)}</p>
          <p className={styles.price}>
            price: <span>${roundNumber(price)}</span>
          </p>
        </div>
      </NavLink>
    </li>
  );
}
