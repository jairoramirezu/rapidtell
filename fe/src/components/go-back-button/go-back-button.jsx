import { useNavigate } from "react-router-dom"

const GoBackButton = ({ white = false }) => {
  const navigate = useNavigate()
  return (
    <img
      onClick={() => navigate(-1)}
      src={`/images/back-arrow-${white ? "dad" : "18"}.svg`}
      alt="Ir atras"
    />
  )
}

export default GoBackButton
