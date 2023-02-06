import { React, useEffect, useState } from "react";
import { getProducts } from "../../services";
import ScrollButton from "../ScrollTop";
import PhoneCard from "./PhoneCard";
import PhoneNotFound from "./PhoneNotFound";
import SearchInput from "../filters/SearchInput";
import SortByPrice from "../filters/SortByPrice";

const PhoneList = (props) => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");

  const results = !search
    ? products
    : products.filter(
        (data) =>
          data.model.toLowerCase().includes(search.toLowerCase()) ||
          data.brand.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 col-lg-3 pl-5">
            <SortByPrice />
          </div>
          <div className="col-12 col-md-8 col-lg-5">
            <SearchInput setSearch={setSearch} />
          </div>
        </div>
        <div className="row my-3">
          {products != null ? (
            results.length > 0 ? (
              results.map((product) => (
                <PhoneCard product={product} key={product.id} />
              ))
            ) : (
              <div className="col-12 text-center">
                <PhoneNotFound search={search} />
              </div>
            )
          ) : (
            "not found"
          )}
        </div>
      </div>

      <ScrollButton />
    </>
  );
};

export default PhoneList;
