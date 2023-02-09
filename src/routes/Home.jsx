import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import PhoneNotFound from "../components/render/PhoneNotFound";
import PhoneCard from "../components/render/PhoneCard";
import SearchInput from "../components/filters/SearchInput";


const Home = () => {
  const navigate = useNavigate();
  const handleClickProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const products = useProducts();
  const [search, setSearch] = useState("");

  const filteredResults = !search
    ? products
    : products.filter((data) => {
        return (
          data.model.toLowerCase().includes(search.toLowerCase()) ||
          data.brand.toLowerCase().includes(search.toLowerCase())
        );
      });

  const phoneCards = filteredResults?.map((p) => (
    <PhoneCard
      key={p.id}
      image={p.imgUrl}
      brand={p.brand}
      model={p.model}
      price={p.price}
      onClick={() => handleClickProduct(p.id)}
    />
  ));

  return (
    <div className="container pt-2">
      <div className="row justify-content-end">
        <div className="col-12 col md-8 col-lg-5">
          <SearchInput setSearch={setSearch} />
        </div>
      </div>
      {phoneCards?.length > 0 ? (
        <div className="row my-1 my-sm-3">{phoneCards}</div>
      ) : (
        <div className="col-12 text-center">
          <PhoneNotFound search={search} />
        </div>
      )}
    </div>
  );
};

export default Home;
