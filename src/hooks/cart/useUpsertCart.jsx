import { useMutation, useQueryClient } from '@tanstack/react-query';

const upsertCart = async ({ userId, items }) => {

  const response = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}cart/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items,
    }),
  });

  if (!response.ok) {
    throw new Error('Error updating or creating cart');
  }

  return response.json();
};

export default function useUpsertCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: upsertCart,
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries(['cart', userId]);
    },
  });
}
