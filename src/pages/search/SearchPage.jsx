import React from "react";
import { useState } from "react";
import SearchInput from "../../components/search/SearchInput";
import SearchResultList from "../../components/search/SearchResultsList";
import BackButton from "../../components/ui/button/BackButton";
import styles from "../../components/feed/PostFeed.module.scss";

export default function SearchPage() {
  const [results, setResults] = useState([]);

  return (
    <>
      <div className={styles.header}>
        <BackButton />
        <SearchInput setResults={setResults} />
      </div>
      <SearchResultList results={results} />
    </>
  );
}
