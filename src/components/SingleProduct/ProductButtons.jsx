import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMinusSm, HiOutlineTrash, HiPlusSm } from "react-icons/hi";
import {
  addFavoriteProducts,
  removeFavoriteProduct,
} from "../../features/productSlice";
import {
  addCart,
  decrementNumberCart,
  incrementNumberCart,
  removeCart,
} from "../../features/cartSlice";
import styles from "./SingleProduct.module.css";

function ProductButtons({ product, favoriteProducts }) {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const isExistFav = favoriteProducts.find((item) => +item.id === +product.id);
  const foundCart = carts.find((item) => +item.id === +product.id);

  return (
    <div className={styles.buttons}>
      <button
        onClick={() =>
          isExistFav
            ? dispatch(removeFavoriteProduct(+product.id))
            : dispatch(addFavoriteProducts(product))
        }
      >
        {isExistFav ? "Remove Favorit" : " Add Favorite"}
      </button>
      {foundCart ? (
        <CartButton product={foundCart} dispatch={dispatch} />
      ) : (
        <button onClick={() => dispatch(addCart(product))}>Add Cart</button>
      )}
    </div>
  );
}

export default ProductButtons;

function CartButton({ product, dispatch }) {
  return (
    <div className={styles.prouctsBtn}>
      <button
        className={styles.plusBtn}
        onClick={() => dispatch(incrementNumberCart(product))}
      >
        <HiPlusSm />
      </button>
      <span>{product.quantity}</span>
      {product.quantity > 1 ? (
        <button
          className={styles.minusBtn}
          onClick={() => dispatch(decrementNumberCart(product))}
        >
          <HiMinusSm />
        </button>
      ) : (
        <button
          className={styles.deleteBtn}
          onClick={() => dispatch(removeCart(+product.id))}
        >
          <HiOutlineTrash />
        </button>
      )}
    </div>
  );
}
