import { useMutation } from "@tanstack/react-query";

function useRegisterUser() {
  const url = `${import.meta.env.VITE_BACKEND_ENDPOINT}user/create`;

  const mutation = useMutation({
    mutationFn: async (userData) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      return response.json();
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
}

export default useRegisterUser;
