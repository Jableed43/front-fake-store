import { useQuery } from "@tanstack/react-query";

function useFetchProductById(productId) {
  const apiUrl = productId ? `${import.meta.env.VITE_BACKEND_FAKESTORE}products/${productId}` : null;

  const { data, error, isLoading, isFetched, refetch } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      if (!productId) {
        throw new Error("No productId provided");
      }

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const data = await response.json();
      return data;
    },
    enabled: !!productId,
    staleTime: 1000 * 60 * 5, 
  });

  return {
    product: data || null,
    error: error?.message || null,
    loading: isLoading,
    done: isFetched,
    fetchProduct: refetch,
  };
}

export default useFetchProductById;
