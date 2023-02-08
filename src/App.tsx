import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AllPokemonsPage from "@/pages/AllPokemons"

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
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-4xl text-white">
        Hello world!! Welcome to the pokedex.
      </h1>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
