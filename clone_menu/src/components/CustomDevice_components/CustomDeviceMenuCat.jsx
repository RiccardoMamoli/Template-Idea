import { Button } from "react-bootstrap";

const CustomDeviceMenuCat = () => {
    return (
        <>
            <div className="menu-list pt-3">
                <div className="pe-2">
                    <Button className="menu-list-category">
                        POKE
                    </Button>
                </div>
                <div className="pe-2">
                    <Button className="menu-list-category">
                        ANTIPASTI E TEMPURE
                    </Button>
                </div>
                <div className="pe-2">
                    <Button className="menu-list-category">
                        PRIMI E RAVIOLI
                    </Button>
                </div>
                <div className="pe-2">
                    <Button className="menu-list-category">
                        TEPPANAKI E TATAKI
                    </Button>
                </div>
                <div className="pe-2">
                    <Button className="menu-list-category">
                        BURGER
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CustomDeviceMenuCat;