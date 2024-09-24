import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import imagePokeDet from '../../img/img_singole/POKE.png';
import imageEdamame from '../../img/img_singole/EDAMAME_LD.jpg';
import imageEdaSpciy from '../../img/img_singole/EDAMAME-SPICY-LIME_LD.jpg';
import imageWakame from '../../img/img_singole/WAKAME_LD.jpg';
import imageVerWok from '../../img/img_singole/WOK-DI-VERDURE_LD.jpg';
import imageVeggieTemp from '../../img/img_singole/VEGGIE-TEMPURA_LD.jpg';
import imageJalaTemp from '../../img/img_singole/JALAPENO-IN-TEMPURA_LD.jpg';
import imagePepTemp from '../../img/img_singole/PEPERONE-IN-TEMPURA.jpg';
import imageInvVeggie from '../../img/img_singole/INVOLTINO-VEGGIE-TERIYAKI_LD.jpg';
import imagePolloCurry from '../../img/img_singole/POLLO-CRUNCY_LD.jpg';
import imageRavVerdure from '../../img/img_singole/DUMPLING_VERDURE_OLIO-AL-DRAGONCELLO-CAVOLO-NERO_LD.jpg';
import imageRavMaiale from '../../img/img_singole/DUMPLING-DI-MAIALE_TERIAKI_ERBA_CIPOLLINA-LD.jpg';
import imageRavGamberi from '../../img/img_singole/DUMPLING-DI-GAMBERI-LD.jpg';
import imageUdonSpada from '../../img/img_singole/UDON-AL-WOK-PESCE-SPADA.jpg';
import imageUdonMare from '../../img/img_singole/UDON-MARE_LD.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, } from '../../redux/actions';

const CustomDeviceCatDetails = ({ decrementItem, removeItem, incrementItem, setClick, device}) => {

    const foodItems = {
        poke: [
            {
                name: 'POKE BOWL',
                price: 12.90,
                img: imagePokeDet,
                quantity: 1
            },
        ],

        antipasti_e_tempure: [
            {
                name: 'EDAMAME SEMPLICI',
                price: 2.00,
                img: imageEdamame,
                quantity: 1

            },
            {
                name: 'EDAMAME SPICY E LIME',
                price: 2.50,
                img: imageEdaSpciy,
                quantity: 1
            },
            {
                name: 'WAKAME',
                price: 2.50,
                img: imageWakame,
                quantity: 1
            },
            {
                name: 'VERDURA AL WOK',
                price: 2.00,
                img: imageVerWok,
                quantity: 1
            },
            {
                name: 'VEGGIE TEMPURA',
                price: 2.50,
                img: imageVeggieTemp,
                quantity: 1
            },
            {
                name: 'JALAPENO IN TEMPURA',
                price: 2.50,
                img: imageJalaTemp,
                quantity: 1
            },
            {
                name: 'PEPERONE TEMPURA',
                price: 2.50,
                img: imagePepTemp,
                quantity: 1
            },
            {
                name: 'INVOLTINO VEGGIE',
                price: 2.80,
                img: imageInvVeggie,
                quantity: 1
            },
            {
                name: 'POLLO AL CURRY E LIME',
                price: 3.80,
                img: imagePolloCurry,
                quantity: 1
            },
        ],

        primi_e_ravioli: [

            {
                name: 'RAVIOLI DI VERDURE',
                price: 3.00,
                img: imageRavVerdure,
                quantity: 1
            },

            {
                name: 'RAVIOLI DI MAIALE',
                price: 3.00,
                img: imageRavMaiale,
                quantity: 1
            },

            {
                name: 'RAVIOLI DI GAMBERI',
                price: 3.00,
                img: imageRavGamberi,
                quantity: 1
            },

            {
                name: 'UDON PESCE SPADA',
                price: 5.50,
                img: imageUdonSpada,
                quantity: 1
            },

            {
                name: 'UDON PESCE MISTO',
                price: 5.50,
                img: imageUdonMare,
                quantity: 1
            },

            {
                name: 'UDON CON POLLO',
                price: 4.50,
                img: imageUdonMare,
                quantity: 1
            },

        ]
    };


    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items)
    const selectedFoodItems = foodItems[categoryName] || [];

    const addToCart = (item, index) => {
        dispatch(addToCartAction(item));
        setClick(prevState => {
            const newClickedItems = [...prevState];
            newClickedItems[index] = true;
            return newClickedItems;
        });

    }

    const screen = device ? '3' : '1'; 


    return (
        <>
            <div className='py-3'>
                <h2>{categoryName.replace(/_/g, ' ').toUpperCase()}</h2>
            </div>
            <Container className="m-0 p-0">
                <Row>
                    {
                        selectedFoodItems.map((food, index) => {
                            const cartItem = cartItems.find(item => item.name === food.name);
                            const quantity = cartItem ? cartItem.quantity : 0;

                            return (
                                <Col xs={6} sm={6} md={6} lg={4} className={`col ${selectedFoodItems.length > screen && index < selectedFoodItems.length - screen ? 'pb-4': ''}`} key={food.name}>
                                    <div className="single-cat-card">
                                        <div className="img-cat-box">
                                            <img src={food.img} alt={food.name} />
                                        </div>
                                        <div className="p-1 text-center item-description">
                                            <div>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <p>{food.name}</p>
                                                </div>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <p>{food.price.toFixed(2)}€</p>
                                                </div>
                                                <div className='py-2 d-flex align-items-center justify-content-center'>
                                                    {quantity > 0 ? (
                                                        <div className='quantity-button'>
                                                            <div className='px-1 d-flex align-items-center' style={{ cursor: "pointer" }} onClick={() => {
                                                                quantity === 1 ? removeItem(food) : decrementItem(food);
                                                            }}
                                                            >
                                                                <TiMinus />
                                                            </div>
                                                            <div className='px-1 d-flex align-items-center'>
                                                                {quantity}
                                                            </div>
                                                            <div className='px-1 d-flex align-items-center' style={{ cursor: "pointer" }} onClick={() => incrementItem(food)}>
                                                                <FaPlus />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Button className='add-to-cart-button' onClick={() => addToCart(food)}> Aggiungi <FaShoppingCart /> </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </>
    );
};


export default CustomDeviceCatDetails;
