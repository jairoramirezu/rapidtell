import { ToastContainer } from "react-toastify"
import Main from "./components/main.jsx"
import "./index.css"

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Main />
    </div>
  )
}

export default App
