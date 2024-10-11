import React from "react";
import SearchResultItem from "./SearchResultItem";
import styles from "./Search.module.scss";

const SearchResultList = ({ results }) => {
  return (
    <ul className={styles.userResultsWrapper}>
      {results.map((user) => (
        <SearchResultItem key={user._id} user={user} />
      ))}
    </ul>
  );
};

export default SearchResultList;
