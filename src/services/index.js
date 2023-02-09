const baseUrl = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product/";

export const getProducts = () =>
  fetch(`${baseUrl}`, { method: "GET" }).then((response) => response.json());

export const getProductById = (id) =>
  fetch(`${baseUrl}${id}`, { method: "GET" }).then((response) =>
    response.json()
  );

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
