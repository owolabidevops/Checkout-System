import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ basket,user }, ] = useStateValue();
  return (
    <nav className="header">
      {/* logo on the left -> img*/}
      <Link to="/">
        <img
          className="header_logo"
          src="http://www.fxnigeria.com/static/media/logoinpng.f98a5657.png"
          alt=""
        />
      </Link>
      {/* search box*/}
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 links*/}

      <div className="headerNav">
      
       

      
      </div>
      {/*4 link Basket icon with number*/}
      <Link className="header_link " to="/checkout">
        <div className="header_optionBasket">
          {/* shopping basket icon */}
          <ShoppingBasketIcon />
          {/*  number of item in the basket*/}
          <span className="header_optionLineTwo header_basketcount">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
