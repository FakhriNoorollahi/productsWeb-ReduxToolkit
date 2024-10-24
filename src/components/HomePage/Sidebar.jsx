import React, { useState } from "react";
import styles from "./HomePage.module.css";
import { createQueryObject } from "../../utils/helper";
import { categoriesOption } from "../../constans/constant";

function Sidebar({ setQuery }) {
  const [category, setCategory] = useState("all");
  const handleCategory = (category) => {
    setCategory(category);
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <p>Filter</p>
      <ul>
        {categoriesOption.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleCategory(item.category)}
              className={`${category === item.category ? styles.active : ""}`}
            >
              {item.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
