import { PokemonObject } from "@/interfaces/types"

interface Props {
  pokemon: PokemonObject
}

const colours_types: { [key: string]: string } = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
}

const getColourType = (type: string) => {
  return colours_types[type]
}

export default function ContainerPokemonData({ pokemon }: Props) {
  return (
    <div className="flex flex-col justify-evenly items-center gap-10 w-[30%] min-w-[90%] sm:min-w-[400px]">
      <div className="w-full dark:bg-[#30A7D7] bg-purple-900 min-h-[114px] rounded-xl flex justify-evenly items-center gap-x-10 gap-y-5 flex-wrap p-2 dark:text-black text-white">
        <div className="flex flex-col justify-evenly items-center text-xl">
          <p className="font-bold">Height</p>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className="flex flex-col justify-evenly items-center text-xl">
          <p className=" font-bold">Weight</p>
          <p>{(pokemon.weight * 100) / 1000} kg</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-5 flex-wrap">
        {pokemon.types.map((type) => (
          <span
            className="bg-white rounded-full py-1 px-5 text-black capitalize"
            key={type.type.name}
            style={{ backgroundColor: getColourType(type.type.name) }}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  )
}
