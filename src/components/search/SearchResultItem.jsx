import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = ({ user }) => {
  return (
    <li>
      <Link to={`/post/${user.accountname}/userpost`}>
        <img src={user.image} alt={`${user.username}의 프로필사진`} />
        <h3>{user.username}</h3>
        <p>@{user.accountname}</p>
      </Link>
    </li>
  );
};

export default SearchResultItem;
