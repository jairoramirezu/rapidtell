import { useState } from "react"
import imgAlt from "../../../public/images/audio.svg"
import { useLocation } from "react-router-dom"

const WaitImageLoad = ({
  className,
  img,
  opacity = false,
  key = "",
  handleError = () => {},
  setIsLoad = () => {}
}) => {
  const [load, setLoad] = useState(false)
  const { pathname } = useLocation()
  const isFinal = pathname.split("/")[1] === "final"

  return (
    <>
      <div
        className={`load-background ${isFinal ? "my-4" : ""} ${
          load ? "d-none" : ""
        }`}
      >
        <img
          src={imgAlt}
          className={`${className} ${opacity ? "opacity-unit" : ""}`}
          alt="image of phone"
        />
      </div>
      <img
        src={img}
        className={`${className} ${!load ? "d-none" : ""} ${
          opacity ? "opacity-unit" : ""
        }`}
        onLoad={() => {
          setLoad(true)
          setIsLoad(true)
        }}
        alt="image of phone"
        key={key}
        onError={handleError}
      />
    </>
  )
}

export default WaitImageLoad
