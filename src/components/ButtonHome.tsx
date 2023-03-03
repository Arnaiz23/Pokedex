import { Link } from "react-router-dom"

import HomeIcon from "./Icons/HomeIcon"

export default function ButtonHome() {
  return (
    <Link
      to={"/"}
      className="absolute top-3 left-5 p-2 rounded-full border dark:border-white border-black cursor-pointer"
      title="Go Home"
    >
      <HomeIcon />
    </Link>
  )
}
