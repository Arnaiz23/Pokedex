import { PokemonObject } from "@/interfaces/types"

interface Props {
  pokemon: PokemonObject
}

export default function ContainerPokemonData({ pokemon }: Props) {
  return (
    <div className="flex flex-col justify-evenly items-center gap-10 w-[30%] min-w-[90%] sm:min-w-[400px]">
      <div className="w-full bg-[#30A7D7] min-h-[114px] rounded-xl flex justify-evenly items-center gap-x-10 gap-y-5 flex-wrap p-2">
        <div className="flex flex-col justify-evenly items-center text-xl">
          <p className="font-bold">Height</p>
          <p className="text-black">{pokemon.height * 10} cm</p>
        </div>
        <div className="flex flex-col justify-evenly items-center text-xl">
          <p className=" font-bold">Weight</p>
          <p className="text-black">{(pokemon.weight * 100) / 1000} kg</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-5 flex-wrap">
        {pokemon.types.map((type) => (
          <span className="bg-white rounded-full py-1 px-5 text-black">
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  )
}
