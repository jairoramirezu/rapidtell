import { useState } from "react"
import PhoneContainerDetailImage from "../phone-container-detail-image/phone-container-detail-image"
import PhoneContainerDetail from "../phone-container-detail/phone-container-detail"
import imgAlt from "../../../public/images/audio.svg"

const PhoneContainerGeneral = ({
  list,
  name,
  retryKey,
  img,
  handleImageError,
  color,
  id,
  setList,
  sim,
  size,
  cam,
  bat,
  pes,
  os,
  chip,
  details
}) => {
  const [load, setLoad] = useState(false)
  return (
    <div className="image-detail-container">
      <img
        key={retryKey}
        src={img}
        className={`phone-detail-img ${!load ? "d-none" : ""} ${
          list.includes(name) ? "opacity-25" : ""
        }`}
        onError={handleImageError}
        onLoad={() => setLoad(true)}
      />
      <div className={`load-background ${load ? "d-none" : ""}`}>
        <img src={imgAlt} className="phone-detail-img" alt="image of phone" />
      </div>
      {!list.includes(name) ? (
        <PhoneContainerDetailImage
          retryKey={retryKey}
          img={img}
          handleImageError={handleImageError}
          color={color}
          id={id}
          setList={setList}
          name={name}
        />
      ) : (
        <PhoneContainerDetail
          name={name}
          size={size}
          cam={cam}
          img={img}
          id={id}
          bat={bat}
          pes={pes}
          sim={sim}
          os={os}
          chip={chip}
          color={color}
          details={details}
          setList={setList}
        />
      )}
    </div>
  )
}

export default PhoneContainerGeneral
