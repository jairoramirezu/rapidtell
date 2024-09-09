import { ROM, RAM } from "../../config/contants"

const SearchListCardInfo = ({ images, handleImageError, name, features }) => (
  <div className="d-flex">
    <img
      className="search-prod-image"
      src={images[0]}
      onError={handleImageError}
    />
    <div className="search-prod-details d-flex flex-column justify-content-evenly align-items-start">
      <h3>{name}</h3>
      <h3>
        {features[1]?.name}
        {RAM}
      </h3>
      <h3>
        {features[2]?.name}
        {ROM}
      </h3>
    </div>
  </div>
)

export default SearchListCardInfo
