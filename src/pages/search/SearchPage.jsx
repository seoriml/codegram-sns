import React from "react";
import { useState } from "react";
import SearchInput from "../../components/search/SearchInput";
import SearchResultList from "../../components/search/SearchResultsList";
import BackButton from "../../components/ui/button/BackButton";
import "../../assets/styles/common.scss";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  return (
    <>
      <header className="header">
        <BackButton />
        <SearchInput setResults={setResults} />
      </header>
      <SearchResultList results={results} />
    </>
  );
}
