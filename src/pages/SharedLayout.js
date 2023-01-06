import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { StyledNavbar } from "../components/StyledNavbar";

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <StyledNavbar />
      <Outlet />
      <h2>Footer</h2>
    </>
  )
}
