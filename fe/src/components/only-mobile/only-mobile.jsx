import { ONLY_MOBILE } from "../../config/contants"

const OnlyMobile = () => (
  <div className="mobile-page">
    <p
      className="m-auto w-100"
      dangerouslySetInnerHTML={{ __html: ONLY_MOBILE }}
    />
    <img />
  </div>
)

export default OnlyMobile
