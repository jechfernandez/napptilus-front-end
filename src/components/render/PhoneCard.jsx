import React from "react";

import "../../styles/render/PhoneCard.scss";

const PhoneCard = ({ image, brand, model, price, onClick }) => {
  return (
    <div
      className=" col-12  col-sm-6 col-md-4 col-lg-3 mb-1 mb-sm-3 p-3 p-sm-4 phoneCard"
      onClick={onClick}
    >
      <div className="phoneCard__inner bg-white">
        <div className="p-5 p-sm-4 p-md-3">
          <img
            alt={model}
            className="card-img-top p-4 phoneCard__img"
            src={image}
          />
        </div>{" "}
        <div className="card-body phoneCard__bottom mx-4">
          {" "}
          <div className="phoneCard__text">
            <h3 className="phoneCard__text-model">{model}</h3>
            <h5 className="phoneCard__text-brand">{brand}</h5>{" "}
            <p className="phoneCard__text-price mt-4">
              {price !== "" ? `${price} €` : ""}{" "}
            </p>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
