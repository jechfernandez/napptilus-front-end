import React from "react";

import "../../styles/layout/Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-flex footer">
      <div className="text-center p-3 text-muted footer__text">
        © {currentYear} Copyright: Gadget Garden, the Phone Store
      </div>
    </footer>
  );
};

export default Footer;
