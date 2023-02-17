import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { PokemonObject } from "@/interfaces/types"
import GridContainerData from "@/components/GridContainerData"
import ContainerPokemonData from "@/components/ContainerPokemonData"
import { onePokemonService } from "@/services/pokemon"

type PokemonParams = {
  name: string
}

export default function OnePokemonPage() {
  const { name } = useParams<PokemonParams>()

  const [pokemon, setPokemon] = useState<PokemonObject>({} as PokemonObject)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const urlImage = `https://img.pokemondb.net/artwork/large/${name}.jpg`

  useEffect(() => {
    ;(async () => {
      const pokemon = await onePokemonService({ name })
      setPokemon(pokemon)
      setIsMounted(true)
    })()
  }, [])

  if (!isMounted) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex flex-col justify-evenly items-center gap-20 text-white w-full md:w-[80%] mx-auto pb-5">
      <h1 className="text-4xl capitalize">
        {pokemon.name} #{pokemon.id}
      </h1>
      <div className="flex justify-center items-center gap-10 w-full flex-wrap">
        <picture className="rounded-sm overflow-hidden">
          <img
            src={urlImage}
            alt={`pokemon ${pokemon.name}`}
            className="w-96"
          />
        </picture>

        <ContainerPokemonData pokemon={pokemon} />
      </div>

      <GridContainerData title="Stats">
        {pokemon.stats.map((stat) => (
          <span className="text-center" key={stat.stat.name}>
            <h3 className="text-xl capitalize">{stat.stat.name}</h3>
            <h4 className="opacity-80">{stat.base_stat}</h4>
          </span>
        ))}
      </GridContainerData>

      <GridContainerData title="Moves">
        {pokemon.moves.slice(0, 4).map((move) => (
          <p className="text-xl capitalize" key={move.move.name}>
            {move.move.name}
          </p>
        ))}
      </GridContainerData>
    </div>
  )
}
