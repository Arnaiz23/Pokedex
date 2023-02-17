import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AllPokemonsPage from "@/pages/AllPokemons"
import PokemonTitle from "./components/Icons/PokemonTitle"
import OnePokemonPage from "./pages/OnePokemon"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllPokemonsPage />,
  },
  {
    path: "/pokemon",
    element: <AllPokemonsPage />,
  },
  {
    path: "/pokemon/:name",
    element: <OnePokemonPage />,
  },
])

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 min-h-screen w-full p-5">
      <PokemonTitle />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
