import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AllPokemonsPage from "@/pages/AllPokemons"
import PokemonTitle from "./components/Icons/PokemonTitle"
import OnePokemonPage from "./pages/OnePokemon"
import ToggleTheme from "./components/ToggleTheme"
import ButtonUp from "./components/ButtonUp"

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
    <div className="flex flex-col justify-center items-center gap-20 min-h-screen w-full p-5 dark:bg-[#242424] bg-[#DEE4E7]">
      <header>
        <ToggleTheme />
        <PokemonTitle />
      </header>
      <main className="w-full">
        <RouterProvider router={router} />
        <ButtonUp />
      </main>
    </div>
  )
}

export default App
