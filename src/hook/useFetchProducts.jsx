import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://legekrogen.webmcdm.dk/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  let recommended = products.filter((p) => p.recommended === true);
  console.log(recommended);
  useEffect(() => {
    fetchProducts();
  }, []);
  return { products, error, isLoading, recommended };
};

export default useFetchProducts;
