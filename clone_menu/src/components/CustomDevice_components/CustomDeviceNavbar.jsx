import { FaShoppingCart } from "react-icons/fa";
import { Badge } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CustomDeviceNavbar = () => {
    const totalCart = useSelector((store) => store.cart.items)
    const totalQuantity = totalCart.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <>
            <div className="navbar-tablet">
                <div style={{ cursor: "pointer" }}>
                    <Link to="/" className="text-decoration-none text-light">
                        <p> home</p>
                    </Link>
                </div>
                <div style={{ cursor: "pointer", position: "relative" }}>
                    <Link to="/cart" className="text-light">
                        <FaShoppingCart />
                        {totalCart.length > 0 ? (
                            <Badge className="badge-cart"> {totalQuantity} </Badge>
                        ) : ('')}
                    </Link>
                </div>
            </div>
        </>
    )

}

export default CustomDeviceNavbar;