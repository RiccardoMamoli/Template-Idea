import { useParams } from 'react-router-dom';

const CustomDeviceCatDetails = () => {
    const { categoryName } = useParams();

    // Simuliamo i dettagli della categoria
    const foodItems = {
        poke: ['Poke Bowl 1', 'Poke Bowl 2'],
        antipasti_e_tempure: ['Tempura di Gamberi', 'Antipasto Misto'],
        // Aggiungi altre categorie qui...
    };

    return (
        <div className="category-page">
            <h2>{categoryName.replace(/_/g, ' ').toUpperCase()}</h2>
            <ul>
                {foodItems[categoryName]?.map((item, index) => (
                    <li key={index}>{item}</li>
                )) || <p>Nessun elemento disponibile per questa categoria.</p>}
            </ul>
        </div>
    );
};

export default CustomDeviceCatDetails;
