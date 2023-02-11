import CardPokemon from "@/components/CardPokemon"
import pokemons from "@/mocks/pokemons.json"

const AllPokemonsPage = () => {
  const pokemonsArray = pokemons.results
  return (
    <div className="gap-5 flex flex-wrap">
      {pokemonsArray.map((pokemon) => (
        <CardPokemon url={pokemon.url} />
      ))}
    </div>
  )
}

export default AllPokemonsPage
