import { Col } from "react-bootstrap";
import CustomDeviceNavbar from "./CustomDevice_components/CustomDeviceNavbar";
import CustomDeviceMenuCat from "./CustomDevice_components/CustomDeviceMenuCat";
import CustomDeviceHomePage from "./CustomDevice_components/CustomDeviceHomePage";
import { Route, Routes } from "react-router-dom";
import CustomDeviceCatDetails from "./CustomDevice_components/CustomDeviceCatDetails";
import CustomDeviceCart from "./CustomDevice_components/CustomDeviceCart";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { decrementQuantityAction, incrementQuantityAction, removeFromCartAction } from "../redux/actions";


const CustomDevice = ({ device }) => {


    const dispatch = useDispatch()
    const [click, setClick] = useState([]);
    const decrementItem = (item, index) => {
        dispatch(decrementQuantityAction(item))
        setClick(prevState => {
            const newClickedItems = [...prevState];
            newClickedItems[index] = false;
            return newClickedItems;
        });

    }

    const removeItem = (item) => {
        dispatch(removeFromCartAction(item))
    }

    const incrementItem = (item) => {
        dispatch(incrementQuantityAction(item))
    }


    return (
        <>
            <Col className="text-white d-flex align-items-center justify-content-center pt-0 pt-md-4">
                <div className={`custom-tablet ${device ? 'tablet-size' : 'phone-size'}`}>
                    <div className="custom-tablet-screen">
                        <CustomDeviceNavbar />
                        <CustomDeviceMenuCat />
                        <Routes>
                            <Route path="/" element={<CustomDeviceHomePage device={device} />} />
                            <Route path="category/:categoryName" element={<CustomDeviceCatDetails device={device} decrementItem={decrementItem} removeItem={removeItem} incrementItem={incrementItem} setClick={setClick} />} />
                            <Route path="/cart" element={<CustomDeviceCart device={device} decrementItem={decrementItem} removeItem={removeItem} incrementItem={incrementItem} setClick={setClick} />} />
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