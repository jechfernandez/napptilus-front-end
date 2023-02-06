import React, { useState, useEffect } from "react";
import { getProductById } from "../../services";

const PhoneDetail = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(setProduct, props.match.params.id);
  }, []);

  return (
    <>
      {product ? (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{product.model}</h1>
              <h3>{product.brand}</h3>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default PhoneDetail;
