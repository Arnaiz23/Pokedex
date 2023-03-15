import ToggleTheme from "./ToggleTheme"
import PokemonTitle from "./Icons/PokemonTitle"

export default function Header() {
  return (
    <header className="w-full grid place-items-center">
      <ToggleTheme />
      <PokemonTitle />
    </header>
  )
}
