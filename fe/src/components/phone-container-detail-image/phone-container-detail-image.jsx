import ButtonDetails from "../button-details/button-details"
import PhoneDetailContainerBuyTicket from "../phone-detail-container-buy-ticket/phone-detail-container-buy-ticket"

const PhoneContainerDetailImage = ({ color, id, setList, name }) => (
  <>
    <PhoneDetailContainerBuyTicket color={color} id={id} name={name} />
    <ButtonDetails
      name={name}
      onClick={(e) => {
        setList((prev) => [...prev, e.target.name])
      }}
    />
  </>
)

export default PhoneContainerDetailImage
