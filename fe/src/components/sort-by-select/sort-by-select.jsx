import { FILTRAR, FilterArray } from "../../config/contants"

const SortBySelect = ({ setSort, sort }) => (
  <select
    className="sort-by-container"
    defaultValue={sort}
    onChange={(e) => {
      setSort(e.target.value)
    }}
  >
    {FilterArray.map((el) => (
      <option
        key={el}
        disabled={el === FILTRAR}
        value={el === FILTRAR ? "" : null}
      >
        {el}
      </option>
    ))}
  </select>
)

export default SortBySelect
