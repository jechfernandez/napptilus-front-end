import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div class="text-center text-muted p-3">
        © {new Date().getFullYear()} Copyright: Gadget Garden
      </div>
    </footer>
  );
};

export default Footer;
