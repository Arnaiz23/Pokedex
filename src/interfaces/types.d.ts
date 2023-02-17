// POKEMON INTERFACE
interface NameType {
  name: string
  url: string
}

interface Types {
  slot: number
  type: NameType
}

interface Move {
  name: string
  url: string
}

interface Moves {
  move: Move
}

interface Stat {
  name: string
}

interface Stats {
  base_stat: number
  effort: number
  stat: Stat
}

export interface PokemonObject {
  name: string
  id: number
  types: Types[]
  moves: Moves[]
  height: number
  stats: Stats[]
  weight: number
}

// POKEMONS INTERFACE ARRAY
export interface PokemonArray {
  name: string
  url: string
}
