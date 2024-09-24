import { Col, Container, Row } from "react-bootstrap";
import imagePoke from '../../img/strooka_CATEGORIA_POKE1.png';
import imageAnt from '../../img/ANTIPASTI-E-TEMPURE.jpg';
import imagePrimi from '../../img/PRIMI-E-RAVIOLI.jpg';
import imageTepp from '../../img/TEPPANYAKI-E-TATAKI1.jpg';
import imageBurger from '../../img/BURGER.jpg';
import imageSashimi from '../../img/CRUDI-E-SASHIMI.jpg';
import imageNigiri from '../../img/NIGIRI-CHIRASCI.jpg';
import imageHosomaki from '../../img/HOSOMAKI-E-TEMAKI.jpg';
import imageUramaki from '../../img/URAMAKI-ROLL3.jpg';
import imageTempura from '../../img/TEMPURA-ROLL.jpg';
import imageWok from '../../img/WOK-ROLL.jpg';
import imageDeg from '../../img/DEGUSTAZIONI_(1).png';
import imageAnalc from '../../img/bevande_(1)2.jpeg';
import imageBoll from '../../img/bollicine1.jpeg';
import imageFermi from '../../img/bianchi_fermi1.jpeg'
import { Link } from "react-router-dom";


const CustomDeviceHomePage = ({ device }) => {

    const arrayOfCat = [

        {
            name: "POKE",
            link: "poke",
            img: imagePoke
        },
        {
            name: "ANTIPASTI E TEMPURE",
            link: "antipasti_e_tempure",
            img: imageAnt
        },
        {
            name: "PRIMI E RAVIOLI",
            link: "primi_e_ravioli",
            img: imagePrimi
        },
        {
            name: "TEPPANAKI E TATAKI",
            link: "teppanaki_e_tataki",
            img: imageTepp
        },
        {
            name: "BURGER",
            link: "burger",
            img: imageBurger
        },
        {
            name: "SASHIMI E CRUDI",
            link: "sashimi_e_crudi",
            img: imageSashimi
        },
        {
            name: "NIGIRI E CHIRASHI",
            link: "nigiri_e_chirashi",
            img: imageNigiri
        },
        {
            name: "HOSOMAKI E TEMAKI",
            link: "hosomaki_e_temaki",
            img: imageHosomaki
        },
        {
            name: "URAMAKI ROLL",
            link: "uramaki_roll",
            img: imageUramaki
        },
        {
            name: "TEMPURA ROLL",
            link: "tempura_roll",
            img: imageTempura
        },
        {
            name: "WOK ROLL",
            link: "wok_roll",
            img: imageWok
        },
        {
            name: "DEGUSTAZIONI",
            link: "degustazioni",
            img: imageDeg
        },
        {
            name: "BEVANDE",
            link: "bevande",
            img: imageAnalc
        },
        {
            name: "VINI E BOLLICINE",
            link: "vini_e_bollicine",
            img: imageBoll
        },
        {
            name: "VINI FERMI E SAKE",
            link: "vini_fermi_sake",
            img: imageFermi
        },
    ]

    const screen = device ? '3' : '1'; 

    return (
        <>
            <Container className="m-0 p-0 pt-4">
                <Row>
                    {
                        arrayOfCat.map((cat, index) => (
                            <Col xs={6} sm={6} md={6} lg={4} className={`col ${index >= arrayOfCat.length - screen ? '': 'pb-4'}`}>
                                <Link to={`category/${cat.link}`} className="text-decoration-none text-light">
                                    <div className="single-cat-card">
                                        <div className="img-cat-box">
                                            <img src={cat.img} alt="image-cat" />
                                        </div>
                                        <div className="p-1 text-center card-description">
                                            <p> {cat.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container >

        </>
    )

}
export default CustomDeviceHomePage;