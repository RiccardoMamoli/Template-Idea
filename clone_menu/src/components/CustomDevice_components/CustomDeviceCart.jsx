import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

const CustomDeviceCart = ({ decrementItem, removeItem, incrementItem }) => {
    const cartTotal = useSelector((store) => store.cart.items);

    return (
        <>
            <Container className="m-0 p-0">
                {cartTotal.length === 0 ? (
                    <Row className="py-4">
                        <Col className="d-flex align-items-center justify-content-center">
                            <p style={{opacity: '0.4'}}>Non ci sono articoli nel carrello.</p>
                        </Col>
                    </Row>
                ) : (
                    cartTotal.map((item) => (
                        <Row className="py-1" key={item.id}> {/* Assicurati di avere una chiave unica, usa un identificativo appropriato */}
                            <Col className="d-flex align-items-center">
                                <div 
                                    style={{ cursor: 'pointer' }} 
                                    className="px-1"
                                    onClick={() => {
                                        item.quantity === 1 ? removeItem(item) : decrementItem(item);
                                    }}
                                >
                                    <TiMinus />
                                </div>
                                <div className="px-1">{item.quantity}</div>
                                <div 
                                    style={{ cursor: 'pointer' }} 
                                    className="px-1" 
                                    onClick={() => incrementItem(item)}
                                >
                                    <FaPlus />
                                </div>
                            </Col>
                            <Col>
                                <div className="img-box-cart">
                                    <img src={item.img} alt={item.name} />
                                </div>
                            </Col>
                            <Col className="d-flex align-items-center">
                                <div>{item.name}</div>
                            </Col>
                            <Col className="d-flex align-items-center">
                                <div>{(item.price * item.quantity).toFixed(2)}€</div> {/* Formattato per mostrare due decimali */}
                            </Col>
                        </Row>
                    ))
                )}
            </Container>
        </>
    );
};

export default CustomDeviceCart;
