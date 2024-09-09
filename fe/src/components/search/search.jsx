import { useEffect, useContext, useState, useRef } from "react"
import NavContext from "../context/context"
import SearchList from "../search-list/search-list"
import SearchbarIcons from "../searchbar-icons/searchbar-icons"
import SearchbarInput from "../searchbar-input/searchbar-input"

const Search = ({ searchDisplay, setSearchDisplay, pathname }) => {
  const [list, setList] = useState([])
  const inputRef = useRef(null)
  const {
    currency: [currency, setCurrency],
    dollarPrice: [dollarPrice],
    phones: [phones],
    color: [, setPhoneColor]
  } = useContext(NavContext)

  useEffect(() => {
    setSearchDisplay(true)
  }, [pathname])

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus()
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [searchDisplay])

  const handleClickOutside = () => {
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const clear = () => {
    setSearchDisplay(true)
    setPhoneColor(false)
    setList([])
  }

  return (
    <>
      {!searchDisplay && (
        <div className="menu">
          <SearchbarIcons
            currency={currency}
            setCurrency={setCurrency}
            clear={clear}
          />
          <div className="d-flex flex-column w-100">
            <SearchbarInput
              inputRef={inputRef}
              setList={setList}
              products={phones?.productsData}
            />
            <SearchList
              list={list}
              clear={clear}
              currency={currency}
              dollarPrice={dollarPrice}
              prices={phones?.pricesData}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Search
