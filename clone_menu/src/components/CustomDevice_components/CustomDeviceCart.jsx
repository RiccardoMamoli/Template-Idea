import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

const CustomDeviceCart = ({ decrementItem, removeItem, incrementItem, device }) => {
    const cartTotal = useSelector((store) => store.cart.items);
    const cartTotalValue = cartTotal.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    console.log('tipo', typeof device)

    return (
        <>
        <div className="d-flex flex-column justify-content-between" style={{minHeight: "85%"}}>
            <Container className="m-0 p-0 mt-3 flex-grow-1">
                {cartTotal.length === 0 ? (
                    <Row className="py-4">
                        <Col className="d-flex align-items-center justify-content-center">
                            <p style={{ opacity: '0.4' }}>Non ci sono articoli nel carrello.</p>
                        </Col>
                    </Row>
                ) : (
                    cartTotal.map((item, index) => (
                        <Row className="py-2" key={index}>
                            <div className="d-flex align-items-center" style={{width: `${device ? '25%' : '25%'}`}}>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    className="px-1 d-flex align-items-center"
                                    onClick={() => {
                                        item.quantity === 1 ? removeItem(item) : decrementItem(item);
                                    }}
                                >
                                    <TiMinus />
                                </div>
                                <div className="px-1 d-flex align-items-center">{item.quantity}</div>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    className="px-1 d-flex align-items-center"
                                    onClick={() => incrementItem(item)}
                                >
                                    <FaPlus />
                                </div>
                            </div>
                            <div className={device ? '' : 'd-none'} style={{width: "25%"}}>
                                <div className="img-box-cart">
                                    <img src={item.img} alt={item.name} />
                                </div>
                            </div>
                            <div className="d-flex align-items-center" style={{width: `${device ? '35%' : '50%'}`}}>
                                <div>{item.name}</div>
                            </div>
                            <div className="d-flex align-items-center" style={{width: `${device ? '15%' : '25%'}`}}>
                                <div>{(item.price * item.quantity).toFixed(2)}€</div>
                            </div>
                        </Row>
                    ))
                )}

            </Container>
            <Container className="m-0 p-0">
                <Row>
                    <Col>
                        <div className="cart-total-display">
                            <p className="fw-bold fs-5"> IL TOTALE { device? 'DEL CARRELLO' : ''} E' {cartTotalValue.toFixed(2)}€ </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
};

export default CustomDeviceCart;
