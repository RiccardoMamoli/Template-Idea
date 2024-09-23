import { Col } from "react-bootstrap";
import CustomDeviceNavbar from "./CustomDevice_components/CustomDeviceNavbar";
import CustomDeviceMenuCat from "./CustomDevice_components/CustomDeviceMenuCat";
import CustomDeviceHomePage from "./CustomDevice_components/CustomDeviceHomePage";
import { Route, Routes } from "react-router-dom";
import CustomDeviceCatDetails from "./CustomDevice_components/CustomDeviceCatDetails";

const CustomDevice = ({ device }) => {
    return (
        <>
            <Col className="text-white d-flex align-items-center justify-content-center pt-4">
                <div className={`custom-tablet ${device ? 'tablet-size' : 'phone-size'}`}>
                    <div className="custom-tablet-screen">
                        <CustomDeviceNavbar />
                        <CustomDeviceMenuCat />
                        <Routes>
                            <Route path="/" element={<CustomDeviceHomePage />} />
                            <Route path="category/:categoryName" element={<CustomDeviceCatDetails />} />
                        </Routes>
                    </div>








                    <div className="right-side-button-tablet"></div>
                    <div className="right-left-button-tablet-top"></div>
                    <div className="right-left-button-tablet-center"></div>
                    <div className="right-left-button-tablet-bottom"></div>
                </div>
            </Col>
        </>
    )
}

export default CustomDevice;