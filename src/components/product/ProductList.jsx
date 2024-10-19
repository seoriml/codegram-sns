import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import ProductItem from "./ProductItem";
import useAPI from "../../hooks/useAPI";
import Loading from "../ui/Loading";

export default function ProductList({ portfolios }) {
  const { productData, loading } = useAPI();
  //   const { products, setProducts } = useState([]);
  //   console.log(productData.product);
  //   useEffect(() => {
  //     setProducts(productData.product);
  //     console.log(products);
  //   }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ul className={styles.profileFollowsWrapper}>
      {portfolios.map((item, index) => (
        <ProductItem key={index} {...item} />
      ))}
    </ul>
  );
}
