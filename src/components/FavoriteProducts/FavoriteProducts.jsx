import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineHeart, HiOutlineStar, HiOutlineTrash } from "react-icons/hi";
import { shortText } from "../../utils/helper";
import { removeFavoriteProduct } from "../../features/productSlice";
import styles from "./FavoriteProducts.module.css";

function FavoriteProducts() {
  const { favoriteProducts } = useSelector((state) => state.products);

  return (
    <div className={styles.container}>
      <div className={styles.favoriteBox}>
        <div className={styles.header}>
          <HiOutlineStar />
          <span>Favorites</span>
        </div>
        <ul className={styles.favoriteList}>
          {!favoriteProducts.length ? (
            <img
              className="notProductImage"
              src="../../public/images/shopping-bag-heart.png"
              alt="shopping-bag-heart"
            />
          ) : (
            favoriteProducts.map((item) => (
              <FavoriteCart key={item.id} product={item} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default FavoriteProducts;

const FavoriteCart = ({ product }) => {
  const {
    id,
    image,
    title,
    rating: { rate, count },
  } = product;
  const dispatch = useDispatch();

  return (
    <li className={styles.favItem}>
      <NavLink to={`/products/${id}`} className={styles.imgContainer}>
        <img src={image} alt="" />
      </NavLink>
      <div className={styles.infoProduct}>
        <p className={styles.title}>{shortText(title)}</p>
        <div className={styles.rating}>
          <p>
            <HiOutlineStar />
            <span>{rate}</span>
          </p>
          <p>
            <HiOutlineHeart />
            <span>{count}</span>
          </p>
        </div>
      </div>
      <button onClick={() => dispatch(removeFavoriteProduct(+product.id))}>
        <HiOutlineTrash />
      </button>
    </li>
  );
};
