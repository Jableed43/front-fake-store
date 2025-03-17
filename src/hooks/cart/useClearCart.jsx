import { useMutation, useQueryClient } from '@tanstack/react-query';

const clearCart = async (userId) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}cart/${userId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error clearing cart');
  }

  return response.json();
};

export default function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: clearCart,
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries(['cart', userId]);
    },
  });
}
