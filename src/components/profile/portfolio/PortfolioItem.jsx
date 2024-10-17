import React from "react";
import styles from "./PortfolioItem.module.scss";

const PortfolioItem = ({ title, description, image }) => {
  return (
    <div className={styles.portfolioItem}>
      <img src={image} alt={title} className={styles.portfolioImage} />
      <h3 className={styles.portfolioItemTitle}>{title}</h3>
      <p className={styles.portfolioItemDescription}>{description}</p>
    </div>
  );
};

export default PortfolioItem;
