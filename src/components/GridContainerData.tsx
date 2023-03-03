interface Props {
  children: React.ReactNode
  title: string
}

export default function GridContainerData({ children, title }: Props) {
  return (
    <div className="w-full flex flex-col justify-evenly items-center gap-10">
      <h2 className="text-3xl">{title}</h2>
      <div className="w-[90%] lg:w-9/12 dark:bg-gray-700 bg-gray-400 grid grid-cols-[repeat(auto-fit_,minmax(150px,1fr))] place-items-center gap-5 p-3 rounded-lg">
        {children}
      </div>
    </div>
  )
}
