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
    <div className="flex flex-col justify-evenly items-center gap-20 text-white w-[80%] mx-auto">
      <h1 className="text-4xl capitalize">
        {pokemon.name} #{pokemon.id}
      </h1>
      <div className="flex justify-center items-center gap-10 w-full">
        <picture>
          <img
            src={urlImage}
            alt={`pokemon ${pokemon.name}`}
            className="w-96"
          />
        </picture>
        <div className="flex flex-col justify-evenly items-center gap-10 w-[30%]">
          <div className="w-full bg-[#30A7D7] min-h-[114px] rounded-xl flex justify-evenly items-center gap-10">
            <div className="flex flex-col justify-evenly items-center text-xl">
              <p className="font-bold">Height</p>
              <p className="text-black">{pokemon.height * 10} cm</p>
            </div>
            <div className="flex flex-col justify-evenly items-center text-xl">
              <p className=" font-bold">Weight</p>
              <p className="text-black">{(pokemon.weight * 100) / 1000} kg</p>
            </div>
          </div>
          <div className="flex justify-evenly items-center gap-5">
            {pokemon.types.map((type) => (
              <span className="bg-white rounded-full py-1 px-3 text-black">
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-evenly items-center gap-10">
        <h2 className="text-3xl">Stats</h2>
        <div className="w-9/12 bg-gray-700 flex flex-wrap justify-evenly items-center gap-5 p-3 rounded-lg">
          {pokemon.stats.map((stat) => (
            <span className="text-center">
              <h3 className="text-xl capitalize">{stat.stat.name}</h3>
              <h4 className="opacity-80">{stat.base_stat}</h4>
            </span>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-evenly items-center gap-10">
        <h2 className="text-3xl">Moves</h2>
        <div className="w-9/12 bg-gray-700 flex flex-wrap justify-evenly items-center gap-5 p-3 rounded-lg">
          {pokemon.moves.slice(0, 4).map((move) => (
            <p className="text-xl capitalize">{move.move.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
