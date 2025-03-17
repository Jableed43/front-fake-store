import { useContext } from "react";
import PropTypes from "prop-types";
import CartContext from "./CartContext";
import useFetchCart from "../../hooks/cart/useFetchCart";
import useUpsertCart from "../../hooks/cart/useUpsertCart";
import useRemoveProductFromCart from "../../hooks/cart/useRemoveProductFromCart";
import useClearCart from "../../hooks/cart/useClearCart";
import AuthContext from "./AuthContext";
import Toast from "../layout/Toast";

const CartProvider = ({ children }) => {
  const { userId } = useContext(AuthContext);
  const { data: cart, isLoading } = useFetchCart(userId);
  const upsertCartMutation = useUpsertCart();
  const removeProductMutation = useRemoveProductFromCart();
  const clearCartMutation = useClearCart();

  const addToCart = (product) => {
    if (!userId) return;

    const productKey = product.productId || product.id;

    const existingProduct = cart?.items.find(item => item.productId === productKey);

    if (existingProduct) {
      upsertCartMutation.mutate({
        userId,
        items: cart.items.map(item =>
          item.productId === productKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }, {
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "Product Updated",
            text: "The quantity of the product has been updated in your cart.",
          });
        },
        onError: () => {
          Toast.fire({
            icon: "error",
            title: "Update Failed",
            text: "There was an error updating the product quantity. Please try again.",
          });
        }
      });
    } else {
      upsertCartMutation.mutate({
        userId,
        items: [...(cart?.items || []), { 
          productId: productKey, 
          quantity: 1, 
          price: product.price, 
          image: product.image, 
          title: product.title 
        }],
      }, {
        onSuccess: () => {
          Toast.fire({
            icon: "success",
            title: "Product Added",
            text: "The product has been successfully added to your cart.",
          });
        },
        onError: () => {
          Toast.fire({
            icon: "error",
            title: "Add Failed",
            text: "There was an error adding the product to your cart. Please try again.",
          });
        }
      });
    }
  };

  const updateQuantity = (productId, change) => {
    const updatedItems = cart.items.map(item =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );

    upsertCartMutation.mutate({ userId, items: updatedItems }, {
      onSuccess: () => {
        Toast.fire({
          icon: "success",
          title: "Quantity Updated",
          text: "The product quantity has been updated successfully.",
        });
      },
      onError: () => {
        Toast.fire({
          icon: "error",
          title: "Quantity Update Failed",
          text: "There was an error updating the product quantity. Please try again.",
        });
      }
    });
  };

  const removeProduct = (productId) => {
    removeProductMutation.mutate({ userId, productId }, {
      onSuccess: () => {
        Toast.fire({
          icon: "success",
          title: "Product Removed",
          text: "The product has been successfully removed from your cart.",
        });
      },
      onError: () => {
        Toast.fire({
          icon: "error",
          title: "Remove Failed",
          text: "There was an error removing the product from your cart. Please try again.",
        });
      }
    });
  };

  const clearCart = () => {
    clearCartMutation.mutate(userId, {
      onSuccess: () => {
        Toast.fire({
          icon: "success",
          title: "Cart Cleared",
          text: "Your cart has been successfully cleared.",
        });
      },
      onError: () => {
        Toast.fire({
          icon: "error",
          title: "Clear Cart Failed",
          text: "There was an error clearing your cart. Please try again.",
        });
      }
    });
  };

  const totalProducts = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;
  const totalAmount = cart?.items.reduce((acc, item) => acc + item.quantity * item.price, 0) || 0;

  return (
    <CartContext.Provider value={{ cart, isLoading, addToCart, updateQuantity, removeProduct, clearCart, totalProducts, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
