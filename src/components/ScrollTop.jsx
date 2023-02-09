import React from "react";
import { FaArrowUp } from "react-icons/fa";

import "../styles/ScrollTop.scss";


function ScrollTop() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("scroll-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button id="scroll-top" className="scrollBtn " onClick={backToTop}>
      <span className="scrollBtn__arrow">
        <FaArrowUp />
      </span>
    </button>
  );
}

export default ScrollTop;
