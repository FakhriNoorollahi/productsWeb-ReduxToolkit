import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { TbHome } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import { countCarts } from "../utils/helper";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const { favoriteProducts } = useSelector((store) => store.products);
  const { carts } = useSelector((store) => store.carts);

  return (
    <div
      className={`header ${
        location.pathname !== "/products" && "header-style"
      }`}
    >
      <p>Store Website</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/favorite" style={{ width: "100px" }}>
              <GrFavorite />
              <span>Favorite</span>
            </NavLink>
            {favoriteProducts.length ? (
              <span className="notification">{favoriteProducts.length}</span>
            ) : (
              ""
            )}
          </li>
          <li>
            <NavLink to="/checkout">
              <AiOutlineShoppingCart />
              <span>Bag</span>
            </NavLink>
            {carts.length ? (
              <span className="notification">{countCarts(carts)}</span>
            ) : (
              ""
            )}
          </li>
          <li>
            <NavLink to="/products" className="homeLink">
              <TbHome />
              <span>Home</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
