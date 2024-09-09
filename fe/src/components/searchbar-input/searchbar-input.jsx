import findProductSearchBar from "../../utils/find-products-search-bar"

const SearchbarInput = ({ inputRef, setList, products }) => (
  <div className="w-100 d-flex position-relative">
    <input
      className="search-bar"
      placeholder="Buscar"
      onChange={(e) => findProductSearchBar(setList, products, e.target.value)}
      ref={inputRef}
      spellCheck={false}
    />
    <img
      className="position-absolute search-bar-lup"
      src="/images/search_dad.svg"
      alt="buscar"
      onClick={() => {
        inputRef.current.focus()
      }}
    />
  </div>
)

export default SearchbarInput
