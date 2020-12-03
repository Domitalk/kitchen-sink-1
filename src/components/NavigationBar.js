import React from 'react';
import {
    Navbar, 
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand>The General Store</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    {/* need to add a dropdown profile thingie where you can see options for whatever */}
                    {/* need to add a logo icon for singup/login OR logout depending on whether logged in or not  */}
                </Nav>
            </Navbar>
        </>
    )
};

export default NavigationBar;