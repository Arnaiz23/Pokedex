import { PokemonObject } from "@/interfaces/types"

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