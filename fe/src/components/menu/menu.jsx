import { Link } from "react-router-dom"
import { BRANDS, listOfBrands, SEEALL, TODOS } from "../../config/contants"
import MenuCloseIcon from "../menu-close-icon/menu-close-icon"

const Menu = ({ menuDisplay, setMenuDisplay, pathname }) => (
  <>
    {!menuDisplay && (
      <div className="menu">
        <div className="position-relative d-flex flex-column p-5">
          <MenuCloseIcon setMenuDisplay={setMenuDisplay} />
          {listOfBrands.map((el) => {
            const path = el === SEEALL ? `/${TODOS}` : `/${el.toLowerCase()}`
            return (
              pathname !== path && (
                <Link key={el} to={path}>
                  {el === SEEALL ? BRANDS : el}
                </Link>
              )
            )
          })}
        </div>
      </div>
    )}
  </>
)

export default Menu
