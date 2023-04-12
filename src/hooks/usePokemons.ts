import { useEffect, useState } from "react"

import { getPokemons } from "@/services/pokemon"
import { PokemonArray } from "@/interfaces/types"

export default function usePokemons({offset}: {offset: number}) {
  const [pokemons, setPokemons] = useState<PokemonArray[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      const json = await getPokemons({offset})
      setPokemons(json)
      setLoading(false)
    })()
  }, [offset])

  return { pokemons, loading }
}
