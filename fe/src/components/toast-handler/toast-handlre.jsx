import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

const ToastHandler = () => {
  const location = useLocation()

  useEffect(() => {
    toast.dismiss()
  }, [location.pathname])

  return (
    <ToastContainer
      position="top-right"
      autoClose={15000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default ToastHandler
