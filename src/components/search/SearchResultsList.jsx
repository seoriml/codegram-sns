import React from "react";
import SearchResultItem from "./SearchResultItem";

const SearchResultList = ({ results }) => {
  return (
    <ul>
      {results.map((user) => (
        <SearchResultItem key={user._id} user={user} />
      ))}
    </ul>
  );
};

export default SearchResultList;
