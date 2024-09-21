import { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoIosTabletLandscape } from "react-icons/io";

const CustomNavbar = () => {
    const [device, setDevice] = useState(true)

    const changeDevice = () => {
        setDevice(!device)
    }
    return (
        <>
            <Navbar className="bg-dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-light">Menu Idea</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div className="button-container">
                            <div className="pe-1">
                                <Button className={`custom-button-navbar ${device ? 'background-click' : ''}`} onClick={changeDevice}> <IoMdPhonePortrait className="me-2" /> Smartphone</Button>
                            </div>
                            <div className="ps-1">
                                <Button className={`custom-button-navbar ${device ? '' : 'background-click'}`} onClick={changeDevice}> <IoIosTabletLandscape className="me-2" /> Tablet</Button>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;