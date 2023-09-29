import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
return (
<NavbarBs className = "bg-white shadow-lg mb-3">
    <Container>
        <Nav>
            <Nav.Link to="/" as = {NavLink}>
                Home
            </Nav.Link>
            <Nav.Link to="/store" as = {NavLink}>
                Store
            </Nav.Link>
            <Nav.Link to="/about" as = {NavLink}>
                About
            </Nav.Link>
        </Nav>
    </Container>
</NavbarBs>
)
}