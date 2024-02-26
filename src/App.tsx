import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AllPokemonsPage from "@/pages/AllPokemons"
import OnePokemonPage from "./pages/OnePokemon"
import Header from "./components/Header"
import ButtonUp from "./components/ButtonUp"

export const router = createBrowserRouter([
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

export function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 min-h-screen w-full p-5 dark:bg-[#242424] bg-[#DEE4E7]">
      <Header />
      <RouterProvider router={router} />
      <ButtonUp />
    </div>
  )
}

export default App
