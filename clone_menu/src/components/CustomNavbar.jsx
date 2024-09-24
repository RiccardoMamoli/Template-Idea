
import { Navbar, Container, Button } from "react-bootstrap";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoIosTabletLandscape } from "react-icons/io";
import { Link } from "react-router-dom";

const CustomNavbar = ({device, changeDevice}) => {

    return (
        <>
            <Navbar>
                <Container>
                    <Link className="text-decoration-none" to="/">
                        <Navbar.Brand className="text-light">Menu Idea</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div className="button-container">
                            <div className="pe-1">
                                <Button className={`custom-button-navbar ${device ? 'background-click' : ''}`} onClick={changeDevice}> <IoIosTabletLandscape className="me-2" /> Tablet  </Button>
                            </div>
                            <div className="ps-1">
                                <Button className={`custom-button-navbar ${device ? '' : 'background-click'}`} onClick={changeDevice}> <IoMdPhonePortrait className="me-2" /> Smartphone </Button>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;