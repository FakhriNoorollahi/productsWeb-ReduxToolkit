import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import ProductsList from "./ProductsList";
import { getAsyncProductsData } from "../../features/productSlice";
import { categoryProducts, searchProducts } from "../../utils/helper";
import styles from "./HomePage.module.css";

function Products() {
  const { products, isLoading } = useSelector((state) => state.products);
  const [query, setQuery] = useState({});
  const [displayProducts, setdisplayProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProductsData());
  }, []);

  useEffect(() => {
    setdisplayProducts(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    const searchedProducts = searchProducts(products, query.search);
    const filteredProducts = categoryProducts(searchedProducts, query.category);
    setdisplayProducts(filteredProducts);
  }, [query]);

  return (
    <div className={styles.homeContainer}>
      <Banner setQuery={setQuery} />
      <div className={styles.content}>
        <Sidebar setQuery={setQuery} />
        <ProductsList products={displayProducts} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Products;
