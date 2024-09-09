import { forwardRef } from "react"

const InputPayment = forwardRef(
  (
    {
      title,
      titleEx = false,
      justify,
      width = false,
      required,
      type,
      min = false
    },
    ref
  ) => (
    <div
      className={`d-flex align-items-center justify-content-${justify} position-relative ${
        width ? "width-alt" : null
      }`}
    >
      <label className="d-none">{titleEx || title}</label>
      <input
        className="input-form-client width-per"
        required={required ? true : false}
        type={type}
        ref={ref}
        min={min ? 0 : ""}
      />
      <span className="text-placeholder">{title}</span>
    </div>
  )
)

export default InputPayment
