import { MenuItem, Typography, Box, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function CartLink() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { totalProducts } = useContext(CartContext);

  const handleGoCart = () => {
    navigate("/cart");
  };

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      {isAuthenticated && (
        <MenuItem
          onClick={handleGoCart}
          sx={{
            color: "#2E2E2E",
            "&:hover": { color: "#027E23", background: "none" },
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginLeft: "auto",
            borderRadius: "4px",
          }}
        >
            <ShoppingCartIcon />
            {`(${totalProducts})`}
        </MenuItem>
      )}
    </Box>
  );
}

export default CartLink;
