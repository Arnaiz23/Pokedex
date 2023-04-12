import { PokemonArray, PokemonObject } from "@/interfaces/types"

interface onePokemonProps {
  name?: string
}

export const onePokemonService = async ({ name }: onePokemonProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}pokemon/${name}`
    )
    const json = await response.json()

    const pokemon: PokemonObject = {
      name: json.name,
      id: json.id,
      types: json.types,
      moves: json.moves,
      height: json.height,
      stats: json.stats,
      weight: json.weight,
    }

    return pokemon
  } catch (err) {
    throw new Error("Error requesting pokemon")
  }
}

export const getPokemons = async ({offset}: {offset: number}): Promise<PokemonArray[]> => {
  let pokemonsArray: PokemonArray[] = localStorage.getItem("pokemons") && offset > 0 ? JSON.parse(localStorage.getItem("pokemons") || '{}') : []

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}pokemon?limit=14&offset=${offset}`
    )
    const json = await response.json()

    json.results.forEach((pokemon: PokemonArray) => pokemonsArray.push(pokemon))

    localStorage.setItem("pokemons", JSON.stringify(pokemonsArray))

    return pokemonsArray
  } catch (err) {
    throw new Error("Error requesting pokemons")
  }
}
