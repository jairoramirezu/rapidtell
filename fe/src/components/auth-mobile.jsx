import { useEffect, useState } from "react"
import OnlyMobile from "./only-mobile/only-mobile"

const AuthMobile = ({ children }) => {
  const [showOnlyMobile, setShowOnlyMobile] = useState(false)

  const checkScreenWidth = () => {
    setShowOnlyMobile(window.innerWidth < 500)
  }

  useEffect(() => {
    checkScreenWidth()
    window.addEventListener("resize", checkScreenWidth)
    return () => {
      window.removeEventListener("resize", checkScreenWidth)
    }
  }, [])

  if (!showOnlyMobile) return <OnlyMobile />

  return <div>{children}</div>
}

export default AuthMobile
