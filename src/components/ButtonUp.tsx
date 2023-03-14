import UpArrowIcon from "./Icons/UpArrow"

export default function ButtonUp() {
  const goUp = () => {
    var currentScroll = document.documentElement.scrollTop

    if (currentScroll > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <span className="fixed bottom-2 right-2 p-3 dark:bg-blue-500 bg-gray-700 rounded-full grid items-center dark:text-black text-white">
      <button onClick={goUp}>
        <UpArrowIcon />
      </button>
    </span>
  )
}
