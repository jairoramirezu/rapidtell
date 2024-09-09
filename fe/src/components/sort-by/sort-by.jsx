import SortByChevron from "../sort-by-chevron/sort-by-chevron"
import SortBySelect from "../sort-by-select/sort-by-select"

const SortBy = ({ setSort, sort }) => (
  <div className="w-100 d-flex justify-content-end px-4 mt-4 position-relative">
    <SortBySelect setSort={setSort} sort={sort} />
    <SortByChevron />
  </div>
)

export default SortBy
