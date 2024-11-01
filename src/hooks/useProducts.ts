import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Product } from "../resources/interfaces/Product";

export const useProduts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch {
        setError("error when searching for product");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return { products, loading, error };
};
