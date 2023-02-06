// React
import React from "react";
import { Link } from "react-router-dom";

import "../../styles/render/PhoneCard.scss";

const PhoneCard = ({ product }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 mb-sm-3 p-4 p-sm-3 phoneCard">
      <Link to={`/product=${product.id}`}>
        <div className="card phoneCard__inner">
          <div className="p-5">
            <img
              alt={product.model}
              className="card-img-top p-4 phoneCard__img"
              src={product.imgUrl}
            />
          </div>
          <div className="card-body phoneCard__bottom mx-4">
            <div className="phoneCard__text">
              <h3 className="phoneCard__text-model">{product.model}</h3>
              <h5 className="phoneCard__text-brand">{product.brand}</h5>
              <p className="phoneCard__text-price mt-4">
                {product.price !== "" ? `${product.price} €` : ""}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PhoneCard;
