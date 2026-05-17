import { Outlet } from "react-router";
import Footer from "./components/Shared/Footer/Footer";
import NavBar from "./components/Shared/Navbar/NavBar";

function App() {
  return (
    <div className="app-shell mt-3 mx-2 max-w-7xl md:mx-10 xl:mx-auto">
      <NavBar />
      <div className="page-shell">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
