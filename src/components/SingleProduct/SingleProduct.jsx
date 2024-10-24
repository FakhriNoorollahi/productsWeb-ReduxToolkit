import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductButtons from "./ProductButtons";
import { getAsyncProductsData } from "../../features/productSlice";
import styles from "./SingleProduct.module.css";
import Loader from "../../ui/Loader";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { favoriteProducts, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAsyncProductsData());
  }, []);

  const currentProduct = products.find((product) => +product.id === +id);

  if (!currentProduct) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={currentProduct.image} alt="" />
      </div>
      <div className={styles.information}>
        <h2>{currentProduct.title}</h2>
        <p className={styles.description}>{currentProduct.description}</p>
        <p className={styles.price}>
          Price : $<span>{currentProduct.price}</span>
        </p>
        <ProductButtons
          product={currentProduct}
          favoriteProducts={favoriteProducts}
        />
      </div>
    </div>
  );
}

export default SingleProduct;
