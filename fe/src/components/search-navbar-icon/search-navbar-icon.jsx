const SearchNavbarIcon = ({ white, searchFun }) => (
  <div>
    <img
      src={`/images/search_${white ? "000" : "dad"}.svg`}
      alt="buscar"
      onClick={searchFun}
    />
  </div>
)

export default SearchNavbarIcon
