import { Outlet } from "react-router";
import Footer from "./components/Shared/Footer/Footer";
import NavBar from "./components/Shared/Navbar/NavBar";

function App() {
  return (
    <div className="mt-8 mx-2 md:mx-10">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
