import { useState, useEffect } from "react"
import { fetchProducts } from "../hooks/info"
import PhoneContainer from "./phone-container/phone-container"
import sortAlphabetical from "../helpers/sort-products"
import SearchInput from "./search-input/search-input"
import Loader from "./loader/loader"

const Main = () => {
  const [products, setProducts] = useState([])
  const [prices, setPrices] = useState([])
  const [filteredPhones, setFilteredPhones] = useState([])
  const [number, setNumber] = useState("")
  const [search, setSearch] = useState("")
  const [isActive, setIsActive] = useState(true)
  const [loader, setLoader] = useState(true)

  const fetchProd = async () => {
    const res = await fetchProducts()
    setPrices(res.prices)
    setProducts(res.products)
  }

  useEffect(() => {
    fetchProd()
  }, [])

  useEffect(() => {
    if (products.length > 0 && !search) {
      setLoader(false)
      sortAlphabetical(products, setFilteredPhones, isActive)
    } else if (products.length > 0) {
      setLoader(false)
      sortAlphabetical(products, setFilteredPhones, isActive, search)
    } else {
      setLoader(true)
    }
  }, [products, isActive])

  return (
    <div className="main-div">
      {loader ? (
        <Loader />
      ) : (
        <>
          <SearchInput
            products={products}
            setFilteredPhones={setFilteredPhones}
            setSearch={setSearch}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          {filteredPhones.map((ele) => (
            <PhoneContainer
              key={ele.id}
              ele={ele}
              prices={prices}
              fetchProd={fetchProd}
              number={number}
              setNumber={setNumber}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default Main
