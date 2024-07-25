import React from "react";
import { Link, useLocation } from "react-router-dom";

export const WelcomePage = (props) => {
  const location = useLocation();
  const { username } = location.state || { username: "Guest" };

  return (
    <div>
      <h1>Welcome {username}</h1>

      <Link to="/AddItemPage"> Add item </Link>
      <Link to="/CommunityPage"> Community </Link>
      <Link to="/BorrowItemPage"> Borrow Item </Link>
    </div>
  );
};
