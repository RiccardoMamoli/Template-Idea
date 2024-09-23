import { Container, Row, Col } from "react-bootstrap";

const CustomInfo = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-light">
                        <p> Qui ci andranno le info.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CustomInfo;