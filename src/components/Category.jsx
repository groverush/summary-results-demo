import data from "../data.json"

import { iconReaction, iconMemory, iconVerbal, iconVisual } from "../assets"
const Category = () => {
  function setCategoryColor(category) {
    const color =
      category === "Reaction"
        ? "rose"
        : category === "Memory"
        ? "yellow"
        : category === "Verbal"
        ? "green"
        : category === "Visual"
        ? "indigo"
        : ""
    return color
  }
  function setCategoryIcon(category) {
    const icon =
      category === "Reaction"
        ? iconReaction
        : category === "Memory"
        ? iconMemory
        : category === "Verbal"
        ? iconVerbal
        : iconVisual
    return icon
  }
  return (
    <div className="mt-4 gap-4 flex flex-col max-w-[420px] w-full">
      {data.map((item) => {
        const color = setCategoryColor(item.category)

        return (
          <article
            id={item.category}
            key={item.category}
            className={`bg-${color}-500  flex p-3 rounded-lg items-center`}
          >
            <img src={setCategoryIcon(item.category)} alt="icon" />
            <h4 className={`text-${color}-700 flex-1 ml-3 font-semibold`}>
              {item.category}
            </h4>
            <p className="font-semibold">
              {item.score} &nbsp;
              <span className="text-gray-400">/ &nbsp;100</span>
            </p>
          </article>
        )
      })}
    </div>
  )
}
export default Category
