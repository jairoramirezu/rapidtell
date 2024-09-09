import formatPrice from "../../utils/format-price"

const SearchListPrice = ({ currency, prices, default_price, dollarPrice }) => {
  const price = prices.find(({ id }) => id === default_price)?.unit_amount
  return (
    <div className="search-price-container">
      <h3 className="search-prod-price">
        {formatPrice(currency, price, dollarPrice)}
      </h3>
    </div>
  )
}

export default SearchListPrice
