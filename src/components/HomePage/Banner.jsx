import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { createQueryObject } from "../../utils/helper";
import styles from "./HomePage.module.css";

function Banner({ setQuery }) {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.banner}>
      <h1>Shoppy happy</h1>
      <div className={styles.searchBox}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={handleSearch}>
          <RiSearchLine />
        </button>
      </div>
    </div>
  );
}

export default Banner;
