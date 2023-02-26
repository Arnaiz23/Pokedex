import { Link } from "react-router-dom"
import HomeIcon from "./Icons/HomeIcon"

export default function ButtonHome() {
  return (
    <Link
      to={"/"}
      className="absolute top-3 left-5 p-2 rounded-full border border-white cursor-pointer"
      title="Go Home"
    >
      <HomeIcon />
    </Link>
  )
}
