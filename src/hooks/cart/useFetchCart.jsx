import { useQuery } from '@tanstack/react-query';

const fetchCart = async (userId) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}cart/${userId}`);

  if (!response.ok) {
    throw new Error('Error fetching cart');
  }

  return response.json();
};

export default function useFetchCart(userId) {
  return useQuery({
    queryKey: ['cart', userId],
    queryFn: () => fetchCart(userId),
    enabled: !!userId, 
  });
}
