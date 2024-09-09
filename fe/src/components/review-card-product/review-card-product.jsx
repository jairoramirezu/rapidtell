import { useState } from "react"
import ReviewBackgroundProductImage from "../review-background-product-image/review-background-product-image"
import ButtonDetails from "../button-details/button-details"
import PhoneStats from "../phone-stats/phone-stats"

const ReviewCardProduct = ({ info, phone, setInfo }) => {
  const [isLoad, setIsLoad] = useState(false)
  return (
    <div className="position-relative mt-5 w-100">
      <ReviewBackgroundProductImage
        setIsLoad={setIsLoad}
        phone={phone}
        opacity={info}
        isLoad={isLoad}
      />
      {!info ? (
        <>
          {isLoad && (
            <ButtonDetails
              onClick={() => {
                setInfo((prev) => !prev)
              }}
            />
          )}
        </>
      ) : (
        <>
          <PhoneStats
            size={phone?.features[3]?.name}
            cam={phone?.features[4]?.name}
            bat={phone?.features[5]?.name}
            pes={phone?.features[6]?.name}
            sim={phone?.features[7]?.name}
            os={phone?.features[8]?.name}
            chip={phone?.features[9]?.name}
          />
          {isLoad && (
            <ButtonDetails
              close
              onClick={() => {
                setInfo((prev) => !prev)
              }}
            />
          )}
        </>
      )}
    </div>
  )
}

export default ReviewCardProduct
