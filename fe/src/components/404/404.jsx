import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../../public/images/rapidtell_dad.svg"
import {
  PAGE_NOT_FOUND_LINK,
  PAGE_NOT_FOUND_TITLE
} from "../../config/contants"

const NotFound = () => {
  const navigate = useNavigate()
  // document.body.style.overflow = "hidden"

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/")
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="not-found-main-container">
      <div className="d-flex align-items-center justify-content-center flex-column main-not-found-info">
        <Link className="link-to-home-logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <h1>{PAGE_NOT_FOUND_TITLE}</h1>
        <Link
          className="link-to-home"
          to="/"
          dangerouslySetInnerHTML={{ __html: PAGE_NOT_FOUND_LINK }}
        />
      </div>
    </div>
  )
}

export default NotFound
