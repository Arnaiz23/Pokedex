import CardPokemon from "@/components/CardPokemon"
import usePokemons from "@/hooks/usePokemons"
import { PokemonArray } from "@/interfaces/types"
import Loading from "@/components/Loading"

interface PokemonsProps {
  pokemons: PokemonArray[]
}

function Pokemons({ pokemons }: PokemonsProps) {
  return (
    <div className="gap-y-14 gap-x-5 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-items-center w-[80%] mx-auto">
      {pokemons.map(({ name, url }) => (
        <CardPokemon url={url} key={name} name={name} />
      ))}
    </div>
  )
}

export default function AllPokemonsPage() {
  const { pokemons, loading } = usePokemons()

  return loading ? <Loading /> : <Pokemons pokemons={pokemons} />
}
