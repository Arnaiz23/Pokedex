import { useEffect, useState } from "react"

import CardPokemon from "@/components/CardPokemon"
import { getPokemons } from "@/services/pokemon"
import { PokemonArray } from "@/interfaces/types"

const AllPokemonsPage = () => {
  const [pokemons, setPokemons] = useState<PokemonArray[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      const json = await getPokemons()
      setPokemons(json)
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="gap-y-14 gap-x-5 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-items-center w-[80%] mx-auto">
      {pokemons.map(({ name, url }) => (
        <CardPokemon url={url} key={name} name={name} />
      ))}
    </div>
  )
}

export default AllPokemonsPage
