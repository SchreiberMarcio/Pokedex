import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>,
    },
    {
        path: "/pokedex",
        element: <h1>Login</h1>,
    },
    {
        path: "/register",
        element: <h1>Register</h1>,
    },
]);

export function AppRoutes() {
    return <RouterProvider router={router} />
}