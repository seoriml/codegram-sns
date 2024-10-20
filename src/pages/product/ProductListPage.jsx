import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../../components/ui/Loading";
import ProductList from "../../components/product/ProductList";
import styles from "../../components/product/Product.module.scss";
import useAPI from "../../hooks/useAPI";
import BackButton from "../../components/ui/button/BackButton";

export default function ProductListPage() {
  const { accountname } = useParams();
  const location = useLocation();
  const portfolios = location.state || {};
  const { loading, productData } = useAPI();

  if (!portfolios || loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.followersHeader}>
        <BackButton />
        <h1 className={styles.followerName}>{accountname}의 작품 목록</h1>
      </div>
      {!portfolios || portfolios.length === 0 ? (
        <p className={styles.followerText}>작업이 존재하지 않습니다.</p>
      ) : (
        <ProductList portfolios={portfolios} />
      )}
    </div>
  );
}
