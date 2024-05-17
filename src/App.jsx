import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { DetailProvider } from "./context/DetailContext.jsx";


export default function App() {

  
  return (
    <DetailProvider>
      <Navbar />
        <Outlet />
      <Footer />
    </DetailProvider>
  );
}
