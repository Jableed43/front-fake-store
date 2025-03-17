import { useMutation, useQueryClient } from '@tanstack/react-query';

const removeProductFromCart = async ({ userId, productId }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}cart/${userId}/product/${productId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error removing product from cart');
  }

  return response.json();
};

export default function useRemoveProductFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeProductFromCart,
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries(['cart', userId]);
    },
  });
}
