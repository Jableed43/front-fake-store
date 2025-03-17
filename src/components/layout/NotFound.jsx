import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Typography variant="h3" color="primary" fontWeight="bold">
        404 - Page Not Found
      </Typography>
      <Typography variant="h6" color="textSecondary" mt={2}>
        The site you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px", textTransform: "none" }}
        onClick={handleGoHome}
      >
        Go to Homepage
      </Button>
    </Box>
  );
}

export default NotFound;
