import { VERIFICAR_CAMPO, TELEFONO, EMAIL } from "../config/contants"
import { toast } from "react-toastify"

export const validatePaymentForm = (text) => {
  const value = text.current.value.trim()
  const fieldName = text.current.parentNode.firstChild.innerText

  if (value.length < 4) {
    toast.error(`${VERIFICAR_CAMPO} ${fieldName}`)
    return false
  }

  if (fieldName === TELEFONO && value.length !== 11) {
    toast.error(`${VERIFICAR_CAMPO} ${fieldName}`)
    return false
  }

  if (fieldName === EMAIL && !validateEmail(value)) {
    toast.error(`${VERIFICAR_CAMPO} ${fieldName}`)
    return false
  }

  return true
}

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
