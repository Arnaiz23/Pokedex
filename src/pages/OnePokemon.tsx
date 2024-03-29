import { useParams } from "react-router-dom"

import GridContainerData from "@/components/GridContainerData"
import ContainerPokemonData from "@/components/ContainerPokemonData"
import usePokemon from "@/hooks/usePokemon"
import { PokemonObject } from "@/interfaces/types"
import Loading from "@/components/Loading"
import ButtonHome from "@/components/ButtonHome"

type PokemonParams = {
  name: string
}

interface PokemonProps {
  pokemon: PokemonObject
  urlImage: string
}

function Pokemon({ pokemon, urlImage }: PokemonProps) {
  return (
    <main className="flex flex-col justify-evenly items-center gap-20 dark:text-white text-black w-full md:w-[80%] mx-auto pb-5">
      <ButtonHome />
      <h1 className="text-4xl capitalize">
        {pokemon.name} #{pokemon.id}
      </h1>
      <article className="flex justify-center items-center gap-10 w-full flex-wrap">
        <picture className="rounded-sm overflow-hidden">
          <img
            src={urlImage}
            alt={`pokemon ${pokemon.name}`}
            className="w-96 max-h-[350px] object-contain"
          />
        </picture>

        <ContainerPokemonData pokemon={pokemon} />
      </article>

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
    </main>
  )
}

export default function OnePokemonPage() {
  const { name } = useParams<PokemonParams>()

  const urlImage = `https://img.pokemondb.net/artwork/large/${name}.jpg`

  const { pokemon, isMounted } = usePokemon({ name })

  return isMounted ? (
    <Pokemon pokemon={pokemon} urlImage={urlImage} />
  ) : (
    <Loading />
  )
}
