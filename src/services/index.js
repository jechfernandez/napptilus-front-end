import axios from "axios";

const baseUrl = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api";

export const getProducts = async (state) => {
  const getData = await axios.get(`${baseUrl}/product`);
  state(getData.data);
};

export const getProductById = async (state, id) => {
  const getData = await axios.get(`${baseUrl}/product/${id}`);
  state(getData);
};

export const addToCart = (id, colorCode, storageCode) =>
  fetch(`${baseUrl}/cart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      colorCode,
      storageCode,
    }),
  }).then((response) => response.json());
