import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import Products from "./pages/products.jsx"
import Phones from "./pages/phones.jsx"
import Review from "./pages/review.jsx"
import ScrollToTop from "./components/scroll-top/scroll-top.jsx"
import Sold from "./pages/sold.jsx"
import NotFound from "./components/404/404.jsx"
import { MemoizedContext } from "./components/context/context.jsx"
import ToastHandler from "./components/toast-handler/toast-handlre.jsx"

function App() {
  return (
    <BrowserRouter>
      <MemoizedContext>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/:slug" element={<Phones />} />
          <Route path="/review/:slug/:slug?" element={<Review />} />
          <Route path="/final/:slug/:slug?" element={<Sold />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastHandler />
      </MemoizedContext>
    </BrowserRouter>
  )
}

export default App
