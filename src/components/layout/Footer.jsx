import React from "react";

const Footer = () => {
  return (
    <footer className="container-flex footer">
      <div class="text-center p-3 text-muted">
        © {new Date().getFullYear()} Copyright: Gadget Garden, the Phone Store
      </div>
    </footer>
  );
};

export default Footer;
