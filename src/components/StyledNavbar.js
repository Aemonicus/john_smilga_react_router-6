import { NavLink } from "react-router-dom"


export const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "link active" : "link")}>About</NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? "link active" : "link")}>Products</NavLink>
      <NavLink to="/products/:productId" className={({ isActive }) => (isActive ? "link active" : "link")}>Single Product</NavLink>
      <NavLink to="login" className={({ isActive }) => (isActive ? "link active" : "link")}>Login</NavLink>
      {/* <NavLink to="/" style={({ isActive }) => { return { color: isActive ? "red" : "grey" } }}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => { return { color: isActive ? "red" : "grey" } }}>About</NavLink>
      <NavLink to="/products" style={({ isActive }) => { return { color: isActive ? "red" : "grey" } }}>Products</NavLink> */}
    </nav >
  )
}
