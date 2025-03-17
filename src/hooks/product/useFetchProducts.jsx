import { useQuery } from "@tanstack/react-query";

function useFetchProducts() {
  const apiUrl = "https://fakestoreapi.com/products";

  const { data, error, isLoading, isFetched, refetch } = useQuery({
    queryKey: ["products"], 
    queryFn: async () => {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json();
    },
    keepPreviousData: true,
  });

  return {
    products: data || [],
    error: error?.message,
    loading: isLoading,
    done: isFetched,
    fetchProducts: refetch,
  };
}

export default useFetchProducts;
