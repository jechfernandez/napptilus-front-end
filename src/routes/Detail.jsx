import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import useProductDetail from "../hooks/useProductDetail";

import "../styles/routes/Detail.scss";

const Detail = ({ addCount, item }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useProductDetail(id);

  const [draft, setDraft] = useState({
    colorCode: "",
    storageCode: "",
  });

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleSelect = (e) => {
    const target = e.target;

    if (target.name === "colorCode") {
      setDraft({ ...draft, colorCode: target.value });
    }

    if (target.name === "storageCode") {
      setDraft({ ...draft, storageCode: target.value });
    }
  };

  const handleAddToCart = () => {
    setCart([...cart, draft]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const colorSelector = product?.options?.colors.map((color, index) => (
    <Form.Check
      key={index}
      type="radio"
      name="colorCode"
      id={color.code}
      label={color.name}
      value={color.code}
      onChange={handleSelect}
      custom
      className="mb-3"
    />
  ));

  const storageSelector = product?.options?.storages.map((storage, index) => (
    <Form.Check
      key={index}
      type="radio"
      name="storageCode"
      id={storage.code}
      label={storage.name}
      value={storage.code}
      onChange={handleSelect}
      custom
      className="mb-3"
    />
  ));

  return (
    <>
      <div className="detail pt-3 mx-3 mx-sm-5 mb-5">
        <div className="container p-3 p-sm-5 bg-white detail__container">
          <div className="row">
            <div className="col-auto">
              <button
                type="button"
                className="detail__btn"
                onClick={() => navigate(-1)}
              >
                <span>
                  <FaArrowLeft />
                </span>
                <span className="mx-3">Go back</span>
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 mb-5 col-md-6">
              <img
                className="detail__img mw-100 mw-md-50 "
                src={product?.imgUrl}
                alt={product?.model}
              />
            </div>
            <div className="col-12 col-md-6 pl-5">
              <div className="detail__text">
                <div className="row align-items-end">
                  <div className="col-12 col-md-9">
                    <h6 className="text-uppercase">{product?.brand}</h6>
                    <h3 className="detail__text-model mb-3">
                      {product?.model}
                    </h3>
                  </div>
                  <div className="col-12 col-md-3">
                    {" "}
                    <h3 className="mb-3 text-muted">
                      {product?.price !== "" ? `${product?.price} €` : ""}
                    </h3>
                  </div>
                  <div className="detail__separator mb-4"></div>
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        <span className="detail__text-category">CPU:</span>{" "}
                        {product?.cpu}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">RAM:</span>{" "}
                        {product?.ram}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">OS:</span>{" "}
                        {product?.os}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">
                          Resolution:
                        </span>{" "}
                        {product?.displayResolution}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">Battery:</span>{" "}
                        {product?.battery}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">
                          Primary Camera:
                        </span>{" "}
                        {product?.primaryCamera
                          .toString()
                          .replaceAll(",", ", ")}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">
                          Secondary Camera:
                        </span>{" "}
                        {product?.secondaryCmera
                          .toString()
                          .replaceAll(",", ", ")}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">
                          Dimentions:
                        </span>{" "}
                        {product?.dimentions}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="detail__text-category">Weight:</span>{" "}
                        {product?.weight || "Not specified"}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="">Pick your favourite colour</p>
                  <div>{colorSelector}</div>{" "}
                </div>
                <div className="mb-4">
                  <p className="mb-2">Choose how much space you'll need</p>
                  <div>{storageSelector}</div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-auto">
                    <button
                      type="button"
                      className="btn btn-outline-dark p-3 "
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
