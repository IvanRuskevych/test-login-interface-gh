import {AuthContainer, Nav, Section} from "./Layout.styled.js";
import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <AuthContainer>
                <Section>
                    <Nav>
                        <Link to="/">Home</Link>
                        {' | '}
                        <Link to="/contacts">Contacts</Link>
                    </Nav>
                    <Outlet/>
                </Section>
            </AuthContainer>
        </>
    )
}

export default Layout
