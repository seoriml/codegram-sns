import React from "react";
import styles from "../feed/PostFeed.module.scss";
import buttonStyles from "../ui/Button.module.scss";
import logoIcon from "../../assets/images/symbol_logo_gray.svg";
import { Link } from "react-router-dom";
import ButtonComponent from "../ui/Button";

export default function EmptyFeed() {
  return (
    <div className={styles.emptyFeed}>
      <img src={logoIcon} alt="코드그램 아이콘" />
      <p>유저를 검색해 팔로우 해보세요!</p>
      <Link to="/search" className={buttonStyles.buttonPage}>
        <ButtonComponent children={"검색하기"} />
      </Link>
    </div>
  );
}
