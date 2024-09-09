import { FINA_NOTES } from "../../config/contants"

const Warranty = () => (
  <div
    className="info-notes-container"
    dangerouslySetInnerHTML={{ __html: FINA_NOTES }}
  ></div>
)

export default Warranty
