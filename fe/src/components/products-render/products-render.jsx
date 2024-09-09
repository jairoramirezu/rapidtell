import { useState, useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import NavContext from "../context/context"
import SortBy from "../sort-by/sort-by"
import Loader from "../loader/loader"
import useFilteredPhones from "../../utils/filtered-phones"
import FilterPhones from "../filter-phones/filter-phones"
import NotFound from "../404/404"
import { listOfBrands } from "../../config/contants"
import capitalize from "../../utils/capitalize"

const ProductsRender = () => {
  const pathname = useLocation()
  const location = pathname?.pathname.replace(/^\//, "")
  const [sort, setSort] = useState("")
  const {
    dollarPrice: [dollarPrice],
    currency: [currency],
    phones: [phones],
  } = useContext(NavContext)
  const filteredPhones = useFilteredPhones(phones, location, sort)
  const locations = [...listOfBrands, "Todos"]
  const isLocationValid = locations.includes(capitalize(location))
  useEffect(() => {}, [pathname])

  return (
    <>
      {isLocationValid ? (
        <div>
          {filteredPhones.length !== 0 ? (
            <>
              <SortBy sort={sort} setSort={setSort} />
              <FilterPhones
                filteredPhones={filteredPhones}
                phones={phones}
                dollarPrice={dollarPrice}
                currency={currency}
              />
            </>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default ProductsRender
