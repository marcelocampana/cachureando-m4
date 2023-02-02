const productData = fetch("../data/products.json")
  .then((response) => response.json())
  .then((result) => {
    return result;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export default productData;
