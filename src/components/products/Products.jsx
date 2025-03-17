import { useContext, useState } from "react";
import "../../App.css";
import {
  Box,
  Typography,
  CircularProgress,
  Grid2,
  Alert,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Layout from "../layout/Layout";
import empty from "../../assets/empty-box.svg";
import ProductCard from "./ProductCard";
import useFetchProducts from "../../hooks/product/useFetchProducts";
import SearchIcon from "@mui/icons-material/Search";
import CartContext from "../context/CartContext";

function Products() {
  const { products, error: fetchError, loading: loadingProducts } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Grid2 sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <FormControl fullWidth>
          <OutlinedInput
            sx={{ borderRadius: "30px" }}
            placeholder="Search products"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </FormControl>

        {loadingProducts ? (
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid2 container spacing={3} justifyContent="center">
            {fetchError && (
              <Grid2 item xs={12}>
                <Alert severity="error">Error: {fetchError}</Alert>
              </Grid2>
            )}

            {!loadingProducts && (
              <Grid2 container justifyContent="center" rowGap={4}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </Grid2>
            )}

            {!loadingProducts && filteredProducts.length === 0 && !fetchError && (
              <Grid2 alignSelf="center" justifyContent="center" item xs={12}>
                <Typography variant="h5" align="center">
                  No products found.
                </Typography>
                <img
                  src={empty}
                  alt="empty"
                  style={{
                    width: "50%",
                    maxWidth: "400px",
                    margin: "20px",
                    borderRadius: "8px",
                  }}
                />
              </Grid2>
            )}
          </Grid2>
        )}
      </Grid2>
    </Layout>
  );
}

export default Products;
