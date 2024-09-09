import { createContext, useState, useEffect, useMemo, memo } from "react"
import listOfItems from "../../hooks/list-of-items.jsx"
import getDollarPrice from "../../hooks/get-dollar-price.jsx"
import { useLocation } from "react-router-dom"

const NavContext = createContext([])
export const Context = ({ children }) => {
  const location = useLocation()
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [products, setProducts] = useState([])
  const [prices, setPrices] = useState([])
  const [overflow, setOverflow] = useState(true)
  const [currency, setCurrency] = useState(false)
  const [dollarPrice, setDollarPrice] = useState(undefined)
  const [phones, setPhones] = useState([])
  const [color, setColor] = useState(false)
  const [finalSold, setFinalSold] = useState(false)

  useEffect(() => {
    listOfItems().then((data) => {
      setProducts(data?.productsData)
      setPrices(data?.pricesData)
      setPhones(data)
    })

    getDollarPrice().then(({ price }) => {
      setDollarPrice(Math.floor(price + 2))
    })
  }, [location.pathname])

  const store = useMemo(
    () => ({
      paymentMethod: [paymentMethod, setPaymentMethod],
      products: [products, setProducts],
      prices: [prices, setPrices],
      overflow: [overflow, setOverflow],
      currency: [currency, setCurrency],
      dollarPrice: [dollarPrice, setDollarPrice],
      phones: [phones, setPhones],
      color: [color, setColor],
      final: [finalSold, setFinalSold]
    }),
    [
      paymentMethod,
      products,
      prices,
      overflow,
      currency,
      dollarPrice,
      phones,
      color,
      finalSold
    ]
  )

  return <NavContext.Provider value={store}>{children}</NavContext.Provider>
}
export const MemoizedContext = memo(Context)
export default NavContext
