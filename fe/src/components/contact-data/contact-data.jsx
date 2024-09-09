import { COMUNICATIONS, MCBO_LOC, socialData } from "../../config/contants"

const ContactData = () => (
  <div className="info-notes-container">
    {socialData.map(
      ({ url, image, title, active }) =>
        active && (
          <a key={title} href={url} target="_blank" rel="noreferrer">
            <img width="24" height="24" src={image} alt={title} />
          </a>
        )
    )}
    <p>{MCBO_LOC}</p>
    <p>{COMUNICATIONS}</p>
  </div>
)

export default ContactData
