const ButtonDetails = ({ onClick, name = false, close = false }) => (
  <img
    className="add-button"
    src={`/images/${!close ? "plus" : "close_thick"}.svg`}
    alt="details"
    name={name ? name : null}
    onClick={onClick}
  />
)

export default ButtonDetails
