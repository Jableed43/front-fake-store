import { createBrowserRouter } from "react-router-dom"
import Home from "./components/layout/Home.jsx"
import Register from "./components/auth/Register.jsx"
import Login from "./components/auth/Login.jsx"
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx"
import Products from "./components/products/Products.jsx"
import NotFound from "./components/layout/NotFound.jsx"
import RestrictedRoute from "./components/auth/RestrictedRoute.jsx"
import ProductDetail from "./components/products/ProductDetail.jsx"
import CartPage from "./components/cart/CartPage.jsx"

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
                <Home />
        ),
    },
    {
        path: "/login",
        element: (
            <RestrictedRoute>
                <Login />
            </RestrictedRoute>
        ),
    },
    {
        path: "/register",
        element: (
            <RestrictedRoute>
            <Register />
        </RestrictedRoute>
        )
    },
    {
        path: "/products",
        element: (
                <Products />
        )
    },
    {
        path: "/product/:id",
        element: <ProductDetail />,
    },
    {
        path: "/cart",
        element: ( <ProtectedRoute> <CartPage /> </ProtectedRoute> ),
    },
    {
        path: "*",
        element: <NotFound />
    }
])