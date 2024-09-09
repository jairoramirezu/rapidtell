import sortAlphabetical from "../../helpers/sort-products"

const SearchInput = ({
  products,
  setFilteredPhones,
  setSearch,
  isActive,
  setIsActive
}) => (
  <>
    <div className="info-container-main">
      <img src="/images/rapidtell_000.svg" className="main-logo" />
      <h3 className="text-center">Rapitell - Tabla de actualizaciones</h3>
    </div>
    <div className="d-flex align-items-center my-5 position-relative form-searck-container">
      <div className="form-check form-switch">
        <input
          className="form-check-input mx-4"
          type="checkbox"
          checked={isActive}
          onChange={() => setIsActive((prev) => !prev)}
        />
      </div>
      <div className="search-bar">
        <input
          placeholder="Apple, Xiaomi, Samsung, Moto ..."
          spellCheck={false}
          onChange={(e) => {
            setSearch(e.target.value)
            sortAlphabetical(
              products,
              setFilteredPhones,
              isActive,
              e.target.value
            )
          }}
        />
        <label>Buscar</label>
      </div>
    </div>
  </>
)

export default SearchInput
