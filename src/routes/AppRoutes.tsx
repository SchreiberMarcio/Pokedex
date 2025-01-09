import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { Pokedex } from "../pages/Pokedex";
import { Pokemon } from "../pages/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "/pokedex",
    element: (
      <DefaultLayout>
        <Pokedex />
      </DefaultLayout>
    ),
  },
  {
    path: "/:pokemonId",
    element: (
      <DefaultLayout>
        <Pokemon />
      </DefaultLayout>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
