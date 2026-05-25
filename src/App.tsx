import { Outlet } from "react-router";
import Footer from "./components/Shared/Footer/Footer";
import NavBar from "./components/Shared/Navbar/NavBar";

function App() {
  return (
    <div className="app-shell mx-auto mt-2 w-full max-w-7xl px-3 sm:px-5 lg:px-6">
      <NavBar />
      <div className="page-shell">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
