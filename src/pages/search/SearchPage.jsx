import React from "react";
import { useState } from "react";
import SearchInput from "../../components/search/SearchInput";
import SearchResultList from "../../components/search/SearchResultsList";
import BackButton from "../../components/ui/button/BackButton";
import "../../assets/styles/common.scss";
import useScrollHeader from "../../hooks/useScrollHeader";

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const isVisible = useScrollHeader();

  return (
    <div className="paddingTopForHeader">
      <header className={`${isVisible ? "header" : "headerHidden"}`}>
        <BackButton />
        <SearchInput setResults={setResults} />
      </header>
      <SearchResultList results={results} />
    </div>
  );
}
