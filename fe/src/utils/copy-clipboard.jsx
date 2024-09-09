import { CONCEPTO, TEXT_COPY, CI } from "../config/contants"
import { toast } from "react-toastify"

const copyClipboard = (text) => {
  toast.dismiss()
  if (text.startsWith(`${CONCEPTO} `)) {
    const prefix = `${CONCEPTO} `
    navigator.clipboard.writeText(text.substring(prefix.length))
    return toast.success(TEXT_COPY)
  } else if (text.startsWith(`${CI} `)) {
    const prefix = `${CI} `
    navigator.clipboard.writeText(text.substring(prefix.length))
    return toast.success(TEXT_COPY)
  }
  navigator.clipboard.writeText(text)
  toast.success(TEXT_COPY)
}

export default copyClipboard
