import React, { useState } from "react";
import useAPI from "../../hooks/useAPI";

const SearchInput = ({ setResults }) => {
  const [keyword, setKeyword] = useState("");
  const { get } = useAPI();

  const handleSearch = async () => {
    const token = localStorage.getItem("userToken");
    const response = await get(
      `${import.meta.env.VITE_API_URL}/user/searchuser/?keyword=${keyword}`,
      "application/json",
      token
    );
    setResults(response.payload);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="계정검색"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
