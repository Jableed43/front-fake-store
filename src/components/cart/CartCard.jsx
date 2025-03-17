import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Button, Box, Dialog, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ZoomIn as ZoomInIcon } from "@mui/icons-material";
import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '16px',
  marginBottom: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const ImageWrapper = styled('div')({
  position: 'relative',
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  overflow: 'hidden',
  marginRight: '16px',
  cursor: 'pointer',  
  '&:hover .zoom-icon': { 
    opacity: 1,
  },
});

const ZoomIconWrapper = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0, 
  transition: 'opacity 0.3s ease',
  color: 'white', 
  fontSize: '30px',
});

const InfoWrapper = styled('div')({
  flex: 1,
});

const PriceText = styled(Typography)({
  fontWeight: 'bold',
});

const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

const CartCard = ({ item, updateQuantity, removeProduct, disableDecrement }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
const handleProductClick = () => {
  if (!item.productId || !item._id) {
    console.error('Producto sin los datos esperados:', item);
    return;
  }
  navigate(`/product/${item.productId}`, { state: { product: item } });
};

  const handleImageClick = () => {
    setOpen(true);
  };

  return (
    <>
      <CardWrapper>
        <ImageWrapper onClick={handleImageClick}>
          <img
            src={item.image}
            alt={item.productId}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <ZoomIconWrapper className="zoom-icon">
            <ZoomInIcon />
          </ZoomIconWrapper>
        </ImageWrapper>
        <InfoWrapper>
          <Typography 
            variant="h6" 
            gutterBottom
            onClick={handleProductClick}
            style={{ color: 'blue', cursor: 'pointer' }} 
          >
            {item.title}
          </Typography>
          <PriceText variant="body2">Price: ${item.price}</PriceText>
          <Typography variant="body2" color="textSecondary">Quantity: {item.quantity}</Typography>
        </InfoWrapper>
        <ButtonGroup>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => updateQuantity(item.productId, -1)}
            disabled={disableDecrement}
          >
            -
          </Button>
          <Button variant="outlined" color="primary" onClick={() => updateQuantity(item.productId, 1)}>
            +
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => removeProduct(item.productId)}
          >
            Remove
          </Button>
        </ButtonGroup>
      </CardWrapper>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          sx={{ objectFit: "contain", maxHeight: "90vh", padding: "5px", background: "black" }}
        />
      </Dialog>
    </>
  );
};

CartCard.propTypes = {
  item: PropTypes.object.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  disableDecrement: PropTypes.bool.isRequired,
};

export default CartCard;
