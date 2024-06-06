import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return(
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;