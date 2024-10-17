import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import useAPI from "../../../hooks/useAPI";

export default function Portfolio({ accountname }) {
  const { get, token } = useAPI();
  const [portfolios, setPortfolios] = useState([]);
  // console.log(accountname);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const response = await get(`${import.meta.env.VITE_API_URL}/product/${accountname}`, "application/json", token);
      console.log("portfolio:", response);
      setPortfolios(response.payload?.product);
    };

    if (accountname) {
      fetchPortfolio();
    }
  }, [accountname]);

  return (
    <div className={styles.portfolioContainer}>
      <h2 className={styles.portfolioTitle}>내 작업 목록</h2>
      <div className={styles.portfolioScroll}>
        {portfolios.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
