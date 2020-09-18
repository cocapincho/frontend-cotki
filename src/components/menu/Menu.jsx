import React from "react";
import Brand from "./Brand";
import Search from "./search/Search";
import Cart from "./Cart";
import Account from "./account/Account";
import "../../assets/styles/menu/Menu.css";
function Menu() {
  let tablet = window.matchMedia("screen and(max-width:780px)");
  tablet.addListener(validation);
  console.log(tablet.matches);

  function validation(e) {
    console.log(e.matches);
  }
  return (
    <nav className="top-navbar">
      <Brand />
      <div className="menu-search">
        <Search />
      </div>
      <div className="menu-account">
        <Account />
      </div>
      <div className="menu-cart">
        <Cart />
      </div>
    </nav>
  );
}

export default Menu;