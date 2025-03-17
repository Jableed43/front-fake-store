import React, { useContext } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import CartCard from "./CartCard";
import CartContext from "../context/CartContext.jsx";

const CartList = () => {
  const { updateQuantity, removeProduct, clearCart, totalAmount, cart, isLoading } = useContext(CartContext);

  if (isLoading) {
    return <Typography>Loading cart...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {cart?.items.map((item) => (
          <CartCard 
            key={item.productId} 
            item={item} 
            updateQuantity={updateQuantity} 
            removeProduct={removeProduct} 
            disableDecrement={item.quantity <= 1} 
          />
        ))}
      </Box>
      <Typography variant="h5" marginTop={2}>Total: ${totalAmount.toFixed(2)}</Typography>
      <Button variant="contained" color="secondary" onClick={clearCart} sx={{ mt: 2 }}>Clear Cart</Button>
    </Container>
  );
};

export default CartList;
