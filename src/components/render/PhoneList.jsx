import { React, useEffect, useState } from "react";
import { getProducts } from "../../services";

const PhoneList = () => {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  return (
    <div className="row mb-5">
      {products != null ? (
        products.map(element => (
          <div className="col-3" key={element.id}>
            <div>{ element.model}</div>
          </div>
        ))) : ("not found")}
    </div>
  );
};

export default PhoneList;
