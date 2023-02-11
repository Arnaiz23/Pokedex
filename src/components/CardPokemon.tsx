import { useEffect, useState } from "react"

interface Props {
  url: string
}

const backgroundType = [
  {
    type: "fire",
    bg: "#ff962f",
    button: "#d87724",
  },
  {
    type: "poison",
    bg: "#d1688b",
    button: "#a7526f",
  },
  {
    type: "bug",
    bg: "#c1bc0f",
    button: "#999608",
  },
  {
    type: "grass",
    bg: "#52c458",
    button: "#28a739",
  },
]

interface NameType {
  name: string
  url: string
}

interface Types {
  slot: number
  type: NameType
}

interface PokemonObject {
  name: string
  id: number
  types: Types[]
}

export default function CardPokemon({ url }: Props) {
  const [pokemon, setPokemon] = useState<PokemonObject | undefined>()
  const [isMounted, setIsMounted] = useState(false)
  //const pokemon = pokemonResult

  const urlImage = (name: string) =>
    `https://img.pokemondb.net/artwork/large/${name}.jpg`

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()

    const dataMapped: PokemonObject = {
      name: data.name,
      id: data.id,
      types: data.types,
    }

    setPokemon(dataMapped)
    setIsMounted(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getBackground = (nameType: string, prop: string) => {
    const typeBg = backgroundType.filter(({ type }) => type === nameType)
    return typeBg.length > 0 ? typeBg[0][prop] : backgroundType[1].bg
  }

  if (!isMounted) {
    return <h1>No pokemon</h1>
  }

  return (
    <div
      className={`w-52 rounded-md  relative flex flex-col justify-evenly items-center py-3 min-h-[300px]`}
      style={{
        backgroundColor: getBackground(
          pokemon?.types[0].type.name as string,
          "bg"
        ),
      }}
    >
      <picture className="w-24 overflow-hidden h-24 absolute -top-[43px] rounded-full flex items-center">
        <img
          src={urlImage(pokemon?.name as string)}
          alt={`front of ${pokemon?.name}`}
          className="w-full object-cover  bg-gray-50/50 block"
        />
      </picture>
      <span className="bg-white/50 w-max flex p-1 px-3 rounded-2xl mt-8">
        <p>#{pokemon?.id}</p>
      </span>
      <h2 className="capitalize text-2xl text-gray-700 font-bold">
        {pokemon?.name}
      </h2>
      <div className="flex justify-center items-center gap-4">
        {pokemon?.types?.map((type: Types) => (
          <p key={type.type.name}>{type.type.name}</p>
        ))}
      </div>
      <button
        className="rounded-full p-1 px-3 text-white text-sm shadow shadow-black"
        style={{
          backgroundColor: getBackground(
            pokemon?.types[0].type.name as string,
            "button"
          ),
        }}
      >
        Ver Gráfica
      </button>
    </div>
  )
}
