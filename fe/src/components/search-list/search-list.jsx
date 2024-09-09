import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchListCardInfo from "../search-list-card-info/search-list-card-info"
import SearchListPrice from "../search-list-price/search-list-price"

const SearchList = ({ list, currency, dollarPrice, prices, clear }) => {
  const [retryKey, setRetryKey] = useState(0)

  const handleImageError = () => {
    setRetryKey(retryKey + 1)
  }

  useEffect(() => {
    setRetryKey(0)
  }, [retryKey])

  return (
    <div className="search-bar-products p-5 pt-0">
      {list.map(({ id, name, features, default_price, images }) => (
        <Link
          to={`/review/${id}/`}
          onClick={clear}
          key={`${name}-${features[1]?.name}-${features[2]?.name}-${retryKey}`}
        >
          <div className="container-phones d-flex justify-content-between align-items-center">
            <SearchListCardInfo
              images={images}
              handleImageError={handleImageError}
              name={name}
              features={features}
            />
            <SearchListPrice
              currency={currency}
              default_price={default_price}
              prices={prices}
              dollarPrice={dollarPrice}
            />
          </div>
          <hr className="hr-products" />
        </Link>
      ))}
    </div>
  )
}

export default SearchList
