import { CLOSE } from "../../config/contants"

const MenuCloseIcon = ({ setMenuDisplay }) => (
  <img
    src="/images/close_thin.svg"
    alt={CLOSE}
    onClick={() => setMenuDisplay(true)}
    className="close-button-menu-alt"
  />
)

export default MenuCloseIcon
