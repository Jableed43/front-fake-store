import { Box, Typography, CircularProgress, Button, CardMedia, Dialog } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import GoBackButton from "../layout/GoBackButton";
import useAuth from "../../hooks/useAuth";
import CartContext from "../context/CartContext";
import { useContext, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import useFetchProductById from "../../hooks/product/useFetchProductById";

function ProductDetail() {
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const { id } = useParams(); 
  const { addToCart } = useContext(CartContext);

  const { product, loading, error } = useFetchProductById(id);
  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product);
  };

  if (loading) return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;
  
  if (error) return <Typography color="error">{error}</Typography>;

  if (!product) return <Typography>No product found</Typography>;

  return (
    <Layout>
      <GoBackButton sx={{ position: 'absolute', left: 0, marginLeft: '40px' }} />
      <Box sx={{ maxWidth: "800px", margin: "auto", padding: "20px", textAlign: "center" }}>
        <Box sx={{
          position: "relative",
          display: "inline-block",
          cursor: "pointer",
          "&:hover img": { opacity: 0.8, transform: "scale(1.1)" },
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}>
          <CardMedia
            component="img"
            height="300"
            image={product.image}
            alt={product.title}
            sx={{
              objectFit: "contain",
              marginBottom: "20px",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
            onClick={() => setOpen(true)}
          />
        </Box>

        <Typography variant="h4" fontWeight="bold">{product.title}</Typography>
        <Typography variant="h6" color="black" mt={1}>${product.price.toFixed(2)}</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
          <Typography color='gray'>{product.rating?.rate}</Typography>
          <StarIcon fontSize="small" sx={{ color: "gray", marginLeft: "5px" }} />
          <Typography color='gray' sx={{ marginLeft: "10px" }}>
            ({product.rating?.count} reviews)
          </Typography>
        </Box>
        <Typography mt={2}>{product.description}</Typography>

        {isAuthenticated && (
          <Button
            onClick={(event) => handleAddToCart(event, product)}
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: 'capitalize', borderRadius: '30px', margin: '20px', border: '2px solid #292929', color: '#292929', paddingX: '15px', '&:hover': { background: "#D0D0D0", color: "#292929" } }}
          >
            Add to cart
          </Button>
        )}
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", maxHeight: "90vh", padding: "5px", background: "black" }}
        />
      </Dialog>
    </Layout>
  );
}

export default ProductDetail;
