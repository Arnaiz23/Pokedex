import { PokemonObject } from "@/interfaces/types"
import { onePokemonService } from "@/services/pokemon"
import { useEffect, useState } from "react"

interface Props {
  name?: string
}

export default function usePokemon({ name }: Props) {
  const [pokemon, setPokemon] = useState<PokemonObject>({} as PokemonObject)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      const pokemon = await onePokemonService({ name })
      setPokemon(pokemon)
      setIsMounted(true)
    })()
  }, [])

  return { pokemon, isMounted }
}
