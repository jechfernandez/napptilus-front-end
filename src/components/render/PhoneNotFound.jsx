import React from "react";
import noResults from "../../assets/images/no-results.png";

import "../../styles/render/PhoneNotFound.scss";



const PhoneNotFound = (props) => {
  const { search } = props;

  const textNotFound = !search ? (
    <p className="notFound__text">
      Sorry, your search returned no results, try searching for something else.
    </p>
  ) : (
    <p className="notFound__text">
      We looked everywhere, but no results for "
      <span className="notFound__text-search">{search}</span>" came up. Try
      searching for something else.
    </p>
  );

  return (
    <div className="container notFound mt-3">
      <span>{textNotFound}</span>
      <img className="notFound__img" src={noResults} alt="no results" />
    </div>
  );
};

export default PhoneNotFound;
