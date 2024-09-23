import { FaShoppingCart } from "react-icons/fa";

const CustomDeviceNavbar = () => {
    return (
        <>
            <div className="navbar-tablet">
                <div style={{ cursor: "pointer" }}>
                    <p> your logo here</p>
                </div>
                <div style={{ cursor: "pointer" }}>
                    <FaShoppingCart />
                </div>
            </div>
        </>
    )

}

export default CustomDeviceNavbar;