import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import useAPI from "../../hooks/useAPI";
import defaultImage from "../../assets/images/user_profile.svg";
import Loading from "../ui/Loading";

export default function ProductItem({ itemImage, itemName, id, link }) {
  const { token, loading } = useAPI();

  const [img, setImg] = useState("");

  useEffect(() => {
    if (itemImage.startsWith("blob:http://localhost:5173")) {
      setImg(defaultImage);
    } else {
      setImg(`${import.meta.env.VITE_API_URL}/${itemImage}`);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <li className={styles.followerItem}>
      <Link to={`/product/detail/${id}`} className={styles.followerInfo}>
        <img src={img} alt={`${itemName} 썸네일`} className={styles.profileImg} />
        <div>
          <h3 className={styles.username}>{itemName}</h3>
          <p className={styles.accountname}>{link}</p>
        </div>
      </Link>
    </li>
  );
}
