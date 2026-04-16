import { Outlet } from "react-router"
import Footer from "./components/Shared/Footer/Footer"
import Header from "./components/Shared/Header/Header"

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
