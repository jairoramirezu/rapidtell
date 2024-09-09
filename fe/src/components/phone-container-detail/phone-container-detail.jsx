import PhoneContainerDetailsButtons from "../phone-container-details-buttons/phone-container-details-buttons"
import PhoneStats from "../phone-stats/phone-stats"

const PhoneContainerDetail = ({
  name,
  size,
  cam,
  img,
  id,
  bat,
  pes,
  sim,
  os,
  chip,
  color,
  details,
  setList
}) => (
  <>
    <PhoneStats
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
      buy
    />
    <PhoneContainerDetailsButtons
      setList={setList}
      name={name}
      details={details}
    />
  </>
)

export default PhoneContainerDetail
