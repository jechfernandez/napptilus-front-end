import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getProductById } from "../../services";

import "../../styles/layout/Breadcrumb.scss";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").slice(1);
  const [model, setModel] = React.useState("Loading...");

  React.useEffect(() => {
    if (paths.length > 1) {
      const deviceId = paths[1];
      getProductById(deviceId)
        .then((product) => {
          setModel(product.model);
        })
        .catch((error) => {
          setModel("Error");
          console.error(error);
        });
    }
  }, [paths]);

  return paths.length > 1 ? (
    <div className="container">
      <nav className="d-flex breadcrumb">
        <Link to="/" className="text-decoration-none text-muted">
          <span className="mx-1 mx-sm-3 breadcrumb__link">Home</span>
        </Link>
        <span>/</span>
        <Link to={pathname} className="text-decoration-none text-muted">
          <span className="mx-3 breadcrumb__link">{model}</span>
        </Link>
      </nav>
    </div>
  ) : null;
};

export default Breadcrumb;
