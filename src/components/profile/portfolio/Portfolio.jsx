import React, { useEffect } from "react";
import styles from "./Portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import useAPI from "../../../hooks/useAPI";

export default function Portfolio({ accountname }) {
  const { get, token } = useAPI();
  const portfolioData = [
    {
      title: "React fetch API 연습",
      description: "일일연습",
      image: "path/to/image1.jpg",
    },
    {
      title: "React props 연습",
      description: "일일연습",
      image: "path/to/image2.jpg",
    },
    {
      title: "에러 해결 방법",
      description: "에러 리포트",
      image: "path/to/image3.jpg",
    },
    // 추가 항목...
  ];

  // useEffect(() => {
  //   const fetchPortfolio = async () => {
  //     const response = await get(`${import.meta.env.VITE_API_URL}/product/${accountname}`, "application/json", token);
  //     console.log("port:", response);
  //   };

  //   fetchPortfolio();
  // }, [get, accountname]);

  return (
    <div className={styles.portfolioContainer}>
      <h2 className={styles.portfolioTitle}>내 작업 목록</h2>
      <div className={styles.portfolioScroll}>
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
