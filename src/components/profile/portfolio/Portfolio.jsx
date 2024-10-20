import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import useAPI from "../../../hooks/useAPI";
import { Link } from "react-router-dom";
import Loading from "../../ui/Loading";

export default function Portfolio({ accountname }) {
  const { get, token, loading } = useAPI();
  const [portfolios, setPortfolios] = useState([]);
  // console.log(accountname);
  // console.log(portfolios);

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.portfolioContainer}>
      <Link to={`/product/${accountname}`} state={portfolios}>
        <h2 className={styles.portfolioTitle}>내 작업 목록</h2>
      </Link>
      {!portfolios || portfolios.length === 0 ? (
        <div className={styles.containerPortfolio}>
          <p className={styles.nonePortfolio}>본인의 작업을 등록해 보세요.</p>
        </div>
      ) : (
        <div className={styles.portfolioScroll}>
          {portfolios.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
