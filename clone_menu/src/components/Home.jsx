import { Container, Row } from "react-bootstrap";
import CustomDevice from "./CustomDevice";

const Home = ({device}) => {
    return (
        <>
            <Container>
                <Row>
                    <CustomDevice device={device} />
                </Row>
            </Container>
        </>
    )
}

export default Home;