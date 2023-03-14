import { Link } from "react-router-dom"

interface Props {
  name: string
}

export default function CardPokemon({ name }: Props) {
  const urlImage = (name: string) =>
    `https://img.pokemondb.net/artwork/large/${name}.jpg`

  return (
    <article className="w-52 rounded-md grid grid-rows-[3fr,_1fr,_1fr] justify-items-center  pb-3 h-[350px] dark:bg-white bg-gray-700 overflow-hidden">
      <picture className="max-h-52 overflow-hidden min-h-[195px] bg-white mb-1 flex justify-center items-center dark:border dark:border-b-black">
        <img
          src={urlImage(name)}
          alt={`front of ${name}`}
          className="w-full object-cover"
        />
      </picture>
      <h2 className="capitalize text-2xl dark:text-gray-700 text-white font-bold">
        {name}
      </h2>
      <Link to={`/pokemon/${name}`} title={`Go to ${name} page`}>
        <button className="rounded-full p-1 px-3 dark:text-white text-black text-sm shadow shadow-black dark:bg-gray-700 bg-gray-200">
          Ver Pokemon
        </button>
      </Link>
    </article>
  )
}
