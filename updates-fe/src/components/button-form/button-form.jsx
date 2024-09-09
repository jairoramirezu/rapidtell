const ButtonForm = ({ classname, onclick, name, disabled }) => (
  <button
    type="button"
    disabled={disabled}
    className={classname}
    onClick={onclick}
  >
    {name}
  </button>
)

export default ButtonForm
