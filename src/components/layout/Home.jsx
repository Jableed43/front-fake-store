import { Typography } from '@mui/material';
import Layout from './Layout.jsx';
import showroom from '../../assets/showroom.png';

function Home() {
  return (
    <Layout>
      <Typography 
      color='black'
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
        }}
      >
        Off Shore Clothing
      </Typography>
      <Typography 
      color='black'
        variant="h6" 
        sx={{ 
          maxWidth: 600, 
          margin: 'auto' 
        }}
      >
      Welcome ¡Glad to see you!
      </Typography>
      <img 
        src={showroom} 
        alt="showroom" 
        style={{ 
          width: '70%', 
          maxWidth: '80vw', 
          margin: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' 
        }} 
      />
    </Layout>
  );
}

export default Home;
