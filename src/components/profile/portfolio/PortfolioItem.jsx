import React, { useEffect, useState } from "react";
import styles from "./PortfolioItem.module.scss";
import ImagePlaceholder from "../../../assets/images/user_profile.svg";
import { Link } from "react-router-dom";

const PortfolioItem = ({ itemImage, itemName, link, id }) => {
  // console.log(itemImage, itemName, link);
  const [img, setImg] = useState("");

  useEffect(() => {
    if (itemImage.startsWith("blob:http://localhost:5173")) {
      setImg(ImagePlaceholder);
    } else {
      setImg(`${import.meta.env.VITE_API_URL}/${itemImage}`);
    }
  }, []);

  return (
    <Link to={`/product/detail/${id}`} className={styles.portfolioItem}>
      <img src={img} alt={itemName} className={styles.portfolioImage} />
      <h3 className={styles.portfolioItemTitle}>{itemName}</h3>
      <p className={styles.portfolioItemDescription}>{link}</p>
    </Link>
  );
};

export default PortfolioItem;
