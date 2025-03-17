import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, Button, Typography, CardMedia, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProductCard = ({ product, handleAddToCart }) => {
  const navigate = useNavigate();
  const handleProductClick = (event, product) => {
    event.stopPropagation(); 
    navigate(`/product/${product.id}`, { state: product });
  };
  const { isAuthenticated } = useAuth()

    
  return (
    <Card sx={{ maxWidth: '23%', display: 'flex', flexDirection: 'column', gap: '15px', filter: 'drop-shadow(0px 1px 4px #D0D0D0)', paddingBottom: '15px', transition: 'transform 0.3s ease-in-out' , flexGrow: 1 , minWidth: '250px' , '&:hover': { transform: 'scale(1.1)', cursor: 'pointer' } } } onClick={(event) => handleProductClick(event, product)}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', padding: 0.5 }}
      />

      <CardContent sx={{ flexGrow: 1, display: 'inherit', flexDirection: 'inherit', gap: 'inherit', padding: '0 24px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Typography variant="h6" fontWeight="bold">
            ${product.price.toFixed(2)}
          </Typography>
          <Typography color='gray' variant="body2" display="flex" alignItems="center" >
            {product.rating.rate}
            <StarIcon fontSize="small" color='gray' sx={{ marginLeft: 0.5 }} />
            <Typography component="span" color='gray' sx={{ marginLeft: 1 }}>
              ({product.rating.count})
            </Typography>
          </Typography>
        </Box>
        <Typography variant="body2" textAlign='start' >{product.title}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end', paddingRight: '22px' }}>
        <Button size="small" variant="outlined" sx={{ textTransform: 'lowercase', borderRadius: '30px', border: '2px solid #D0D0D0' , color: '#292929', paddingX: '15px', '&:hover': { background: '#292929', color: 'white' }  }} onClick={(event) => handleProductClick(event, product)}>
          + More
        </Button>
        { isAuthenticated && (<Button size="small" variant="outlined" color="primary" sx={{ textTransform: 'capitalize', borderRadius: '30px', border: '2px solid #292929', color: '#292929' , paddingX: '15px', '&:hover': { background: "#D0D0D0", color: "#292929" } }} onClick={(event) => handleAddToCart(event, product)} >
          Add to cart 
        </Button>)}
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired
};

export default ProductCard;
