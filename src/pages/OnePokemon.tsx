import { useParams } from "react-router-dom"

type PokemonParams = {
  name: string
}

export default function OnePokemonPage() {
  const { name } = useParams<PokemonParams>()

  return <h1 className="text-white text-3xl">Pokemon {name}</h1>
}
