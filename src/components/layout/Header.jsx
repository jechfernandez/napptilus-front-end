import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";

import "../../styles/layout/Header.scss";

const Header = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartCount, setCartCount] = useState(cart.length);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  return (
    <header id="header" className="header sticky-top shadow mb-3 mb-sm-5 ">
      <div className="container">
        <div className="row  justify-content-between align-items-center">
          <div className="col-auto">
            <a href="/">
              <Image
                className="header__logo"
                src="/assets/images/gadget-logo.png"
                alt="Gadget garden logo"
              />
            </a>
          </div>
          <div className="col-auto header__cart px-4 px-sm-5">
            <FaShoppingBag />
            <span className="mx-3">
              <small>{cartCount}</small>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
