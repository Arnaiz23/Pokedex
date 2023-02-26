import { Link } from "react-router-dom"

interface Props {
  url: string
  name: string
}

export default function CardPokemon({ url, name }: Props) {
  const urlImage = (name: string) =>
    `https://img.pokemondb.net/artwork/large/${name}.jpg`

  return (
    <div className="w-52 rounded-md grid grid-rows-[3fr,_1fr,_1fr] place-items-center py-3 h-[350px] bg-white">
      <picture className="max-h-52 overflow-hidden">
        <img
          src={urlImage(name)}
          alt={`front of ${name}`}
          className="w-full object-cover"
        />
      </picture>
      <h2 className="capitalize text-2xl text-gray-700 font-bold">{name}</h2>
      <Link to={`/pokemon/${name}`} title={`Go to ${name} page`}>
        <button className="rounded-full p-1 px-3 text-white text-sm shadow shadow-black bg-gray-700">
          Ver Pokemon
        </button>
      </Link>
    </div>
  )
}
