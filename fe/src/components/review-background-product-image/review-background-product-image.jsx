import WaitImageLoad from "../wait-image-load/wait-image-load"

const ReviewBackgroundProductImage = ({
  phone,
  opacity = false,
  setIsLoad = false,
  isLoad
}) => (
  <WaitImageLoad
    className="phone-detail-img"
    img={phone?.images[0]}
    opacity={opacity}
    setIsLoad={setIsLoad}
    isLoad={isLoad}
  />
)

export default ReviewBackgroundProductImage
