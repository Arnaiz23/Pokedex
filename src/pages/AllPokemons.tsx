import CardPokemon from "@/components/CardPokemon"
import pokemons from "@/mocks/pokemons.json"

const AllPokemonsPage = () => {
  const pokemonsArray = pokemons.results
  return (
    <div className="gap-y-14 gap-x-5 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-items-center w-[80%] mx-auto">
      {pokemonsArray.map(({ name, url }) => (
        <CardPokemon url={url} key={name} />
      ))}
    </div>
  )
}

export default AllPokemonsPage
