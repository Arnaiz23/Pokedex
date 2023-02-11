import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AllPokemonsPage from "@/pages/AllPokemons"
import PokemonTitle from "./components/Icons/PokemonTitle"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllPokemonsPage />,
  },
  {
    path: "/pokemon",
    element: <h1 className="text-white">Pokemon</h1>,
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
