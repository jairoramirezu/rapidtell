import AuthMobile from "../components/auth-mobile.jsx"
import Footer from "../components/footer/footer.jsx"
import Navbar from "../components/navbar/navbar.jsx"
import ReviewComponent from "../components/review/review"

const Review = () => (
  <AuthMobile>
    <Navbar white />
    <ReviewComponent />
    <Footer />
  </AuthMobile>
)

export default Review
