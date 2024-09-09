import { useState, useEffect } from "react"
import PhoneDetailCardDataBelow from "../phone-detail-card-data-below/phone-detail-card-data-below"
import PhoneContainerGeneral from "../phone-container-general/phone-container-general"

const PhoneDetail = ({
  name,
  img,
  ram,
  rom,
  detail,
  price,
  id,
  size,
  cam,
  bat,
  pes,
  sim,
  os,
  chip,
  details
}) => {
  const [list, setList] = useState([])
  const [color, setColor] = useState(null)
  const colors = detail.split(", ")
  const [retryKey, setRetryKey] = useState(0)

  const handleImageError = () => {
    setRetryKey(retryKey + 1)
  }

  useEffect(() => {
    setRetryKey(0)
  }, [img])

  return (
    <div className="phone-detail-container d-flex flex-column">
      <PhoneContainerGeneral
        list={list}
        name={name}
        retryKey={retryKey}
        img={img}
        handleImageError={handleImageError}
        color={color}
        id={id}
        setList={setList}
        sim={sim}
        size={size}
        cam={cam}
        bat={bat}
        pes={pes}
        os={os}
        chip={chip}
        details={details}
      />
      <PhoneDetailCardDataBelow
        colors={colors}
        name={name}
        setColor={setColor}
        price={price}
        ram={ram}
        rom={rom}
      />
    </div>
  )
}

export default PhoneDetail
