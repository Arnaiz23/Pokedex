import CardPokemon from "@/components/CardPokemon"
import usePokemons from "@/hooks/usePokemons"
import { PokemonArray } from "@/interfaces/types"
import Loading from "@/components/Loading"
import { useState } from "react"

interface PokemonsProps {
  pokemons: PokemonArray[]
  incrementOffset: () => void
}

function Pokemons({ pokemons, incrementOffset }: PokemonsProps) {
  return (
    <main className="w-full flex justify-center items-center flex-col gap-12">
      <div className="gap-y-14 gap-x-5 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-items-center w-[80%] mx-auto">
        {pokemons.map(({ name }) => (
          <CardPokemon key={name} name={name} />
        ))}
      </div>
      <button
        className="p-2 dark:bg-blue-500 bg-gray-700 text-white dark:text-black rounded-full mt-[-25px]"
        onClick={incrementOffset}
      >
        More pokemons
      </button>
    </main>
  )
}

export default function AllPokemonsPage() {
  const [offset, setOffset] = useState<number>(0)
  const { pokemons, loading } = usePokemons({ offset })

  const incrementOffset = () => setOffset(offset + 14)

  return loading ? (
    <Loading />
  ) : (
    <Pokemons pokemons={pokemons} incrementOffset={incrementOffset} />
  )
}
