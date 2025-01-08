import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../config/layout/DefaultLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayout>
            
            </DefaultLayout>
        ),
    },
    {
        path: "/pokedex",
        element: (
            <DefaultLayout>

            </DefaultLayout>),
    },
    {
        path: "/",
        element: (
            <DefaultLayout> 

            </DefaultLayout>
        )
    },
]);

export function AppRoutes() {
    return <RouterProvider router={router} />
}