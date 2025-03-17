import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, CircularProgress, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Layout from "../layout/Layout";
import useRegisterUser from "../../hooks/user/useRegisterUser";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { mutate: registerUser, isLoading, isSuccess, isError, error } = useRegisterUser();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form, {
        onSuccess: () => {
          setTimeout(() => navigate("/login"), 1500);
        },
      });
    } catch (err) {
      console.error('Registration failed:', err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>

        <Box
          component="form"
          onSubmit={handleRegister}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "400px",
            background: "#fff",
            padding: 3,
            marginBottom: 4,
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            input={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {isError && (
            <Typography variant="body2" color="error" align="center">
              {error?.message || "Failed to register"}
            </Typography>
          )}
          {isSuccess && (
            <Typography variant="body2" color="success" align="center">
              Registration successful! Redirecting to login...
            </Typography>
          )}
          <Button
            onClick={handleRegister}
            fullWidth
            sx={{
              color: 'white',
              background: "#0E538C",
              ":hover": { background: "#1976d2" },
              textTransform: "capitalize",
            }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Register"}
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}

export default Register;
