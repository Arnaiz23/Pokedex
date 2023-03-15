import CardPokemon from "@/components/CardPokemon"
import usePokemons from "@/hooks/usePokemons"
import { PokemonArray } from "@/interfaces/types"
import Loading from "@/components/Loading"
import SearchBar from "@/components/SearchBar"

interface PokemonsProps {
  pokemons: PokemonArray[]
}

function Pokemons({ pokemons }: PokemonsProps) {
  return (
    <main className="w-full flex justify-center items-center flex-col gap-12">
      <SearchBar />
      <div className="gap-y-14 gap-x-5 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-items-center w-[80%] mx-auto">
        {pokemons.map(({ name }) => (
          <CardPokemon key={name} name={name} />
        ))}
      </div>
      <button className="p-2 dark:bg-blue-500 bg-gray-700 text-white dark:text-black rounded-full mt-[-25px]">
        More pokemons
      </button>
    </main>
  )
}

export default function AllPokemonsPage() {
  const { pokemons, loading } = usePokemons()

  return loading ? <Loading /> : <Pokemons pokemons={pokemons} />
}
