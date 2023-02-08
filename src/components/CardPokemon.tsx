import { useEffect, useState } from "react"

const CardPokemon = () => {
  const [pokemon, setPokemon] = useState()
  const [isMounted, setIsMounted] = useState(false)

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}pokemon/1/`)
    const data = await response.json()
    setPokemon(data)
    setIsMounted(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!isMounted) {
    return <h1>No pokemon</h1>
  }

  return (
    <div className="w-52 rounded-md bg-[#d1688b] flex flex-col justify-center items-center">
      <img
        src={pokemon?.sprites?.front_default}
        alt={`front of ${pokemon?.name}`}
        className="w-20 -translate-y-10 bg-gray-50/50 block rounded-full"
      />
      <span className="bg-white/50 w-max flex p-1 px-3 rounded-2xl">
        <p>#001</p>
      </span>
      <h2 className="capitalize">{pokemon?.name}</h2>
      <h2>Si</h2>
    </div>
  )
}

export default CardPokemon
