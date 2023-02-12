import { useParams } from "react-router-dom"

import { PokemonObject } from "@/interfaces/types"
import pokemonJson from "@/mocks/pokemon-result.json"

type PokemonParams = {
  name: string
}

export default function OnePokemonPage() {
  const { name } = useParams<PokemonParams>()

  const urlImage = `https://img.pokemondb.net/artwork/large/${name}.jpg`

  const pokemon: PokemonObject = {
    name: pokemonJson.name,
    id: pokemonJson.id,
    types: pokemonJson.types,
    moves: pokemonJson.moves,
    height: pokemonJson.height,
    stats: pokemonJson.stats,
    weight: pokemonJson.weight,
  }

  return (
    <>
      <h1 className="text-white text-3xl">Pokemon {pokemon.name}</h1>
      <p className="text-white">id: {pokemon.id}</p>
      <p className="text-white">height: {pokemon.height * 10} cm</p>
      <p className="text-white">weight: {(pokemon.weight * 100) / 1000} kg</p>
      <div className="flex justify-evenly items-center gap-10">
        <p className="text-white">Types:</p>
        <ul className="text-white">
          {pokemon.types.map((type) => (
            <li className="list-disc">{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-evenly items-center gap-10">
        <p className="text-white">Moves:</p>
        <ul className="text-white">
          {pokemon.moves.slice(0, 4).map((move) => (
            <li className="list-decimal">{move.move.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-evenly items-center gap-10">
        <p className="text-white">Stats:</p>
        <ul>
          {pokemon.stats.map((stat) => (
            <li className="text-white">
              {stat.stat.name}:{stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <picture>
        <img src={urlImage} alt={`pokemon ${pokemon.name}`} />
      </picture>
    </>
  )
}
