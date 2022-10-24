import styles from "./Search.module.css";
import { useState } from "react";
const Search = (props) => {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        ref={props.searchRef}
        type="text"
        placeholder="Try keywords like 'ugly' or 'fat' or 'stupid' or 'poor' etc"
      ></input>
    </div>
  );
};

export default Search;
